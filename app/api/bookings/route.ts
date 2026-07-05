import { NextResponse } from "next/server";
import { z } from "zod";
import { getBranchConfig, getBranchService, isBranchKey } from "@/config/site";

const bookingSchema = z.object({
  branch: z.string().min(1),
  service: z.string().min(1),
  name: z.string().min(1, "Name is required").max(100, "Name too long"),
  email: z.string().email("Invalid email").max(254, "Email too long"),
  phone: z.string().min(1, "Phone is required").max(40, "Phone too long"),
  date: z.string().min(1, "Date is required"),
  notes: z.string().min(1, "Notes are required").max(2000, "Notes too long"),
  website: z.string().max(0).optional().default(""),
});

const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

function getClientIP(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const realIP = request.headers.get("x-real-ip");
  const clientIP = request.headers.get("x-client-ip");

  return forwarded?.split(",")[0]?.trim() || realIP || clientIP || "unknown";
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000;
  const maxRequests = 5;

  const record = rateLimitStore.get(ip);
  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (record.count >= maxRequests) return false;

  record.count += 1;
  return true;
}

export async function POST(request: Request) {
  try {
    const clientIP = getClientIP(request);
    if (!checkRateLimit(clientIP)) {
      return NextResponse.json({ ok: false, message: "Too many requests. Please try again later." }, { status: 429 });
    }

    const contentLength = request.headers.get("content-length");
    if (contentLength && Number.parseInt(contentLength, 10) > 1024 * 1024) {
      return NextResponse.json({ ok: false, message: "Request too large." }, { status: 413 });
    }

    const payload = await request.json();
    const validationResult = bookingSchema.safeParse(payload);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          ok: false,
          message: "Invalid booking data.",
          errors: validationResult.error.issues.map((issue) => ({ field: issue.path.join("."), message: issue.message })),
        },
        { status: 400 }
      );
    }

    const bookingData = validationResult.data;

    if (!isBranchKey(bookingData.branch)) {
      return NextResponse.json({ ok: false, message: "Unknown branch." }, { status: 400 });
    }

    if (bookingData.website) {
      return NextResponse.json({ ok: false, message: "Invalid booking data." }, { status: 400 });
    }

    const branch = getBranchConfig(bookingData.branch);
    const service = getBranchService(bookingData.branch, bookingData.service);

    if (!service) {
      return NextResponse.json({ ok: false, message: "Unknown service for this branch." }, { status: 400 });
    }

    const storage = branch.booking.storage;
    const cleanBookingData = {
      branch: bookingData.branch,
      service: bookingData.service,
      serviceCode: service.code,
      serviceTitle: service.seo.title,
      name: bookingData.name,
      email: bookingData.email,
      phone: bookingData.phone,
      date: bookingData.date,
      notes: bookingData.notes,
    };

    if (storage.provider === "local_file") {
      return NextResponse.json({
        ok: true,
        mode: "local_file",
        message: `${branch.name} booking request captured successfully.`,
      });
    }

    if (storage.provider === "webhook") {
      if (!storage.webhookUrl) {
        return NextResponse.json({ ok: false, message: "Webhook mode is enabled but no webhook URL is configured." }, { status: 503 });
      }

      const upstream = await fetch(storage.webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cleanBookingData),
      });

      if (!upstream.ok) {
        return NextResponse.json({ ok: false, message: "Webhook rejected the booking." }, { status: 502 });
      }

      return NextResponse.json({ ok: true, mode: "webhook" });
    }

    if (storage.provider === "email") {
      if (!storage.recipientEmail) {
        return NextResponse.json({ ok: false, message: "Email mode is enabled but no recipient email is configured." }, { status: 503 });
      }

      const subject = encodeURIComponent(`${branch.name} booking request · ${service.code} ${service.seo.title}`);
      const body = encodeURIComponent(
        `Branch: ${branch.name}\nService: ${service.code} ${service.seo.title}\nName: ${cleanBookingData.name}\nEmail: ${cleanBookingData.email}\nPhone: ${cleanBookingData.phone}\nPreferred date: ${cleanBookingData.date}\nNotes: ${cleanBookingData.notes}`
      );

      return NextResponse.json({
        ok: true,
        mode: "email",
        mailtoUrl: `mailto:${storage.recipientEmail}?subject=${subject}&body=${body}`,
      });
    }

    return NextResponse.json({ ok: false, message: "Booking provider is not configured." }, { status: 503 });
  } catch {
    return NextResponse.json({ ok: false, message: "Failed to save booking." }, { status: 500 });
  }
}
