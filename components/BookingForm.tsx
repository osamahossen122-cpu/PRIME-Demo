"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { getBranchConfig, resolveLocaleValue } from "@/config/site";
import type { BranchKey } from "@/config/types";

type BookingFormProps = {
  branch: BranchKey;
  initialService?: string;
};

type FormState = {
  service: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  notes: string;
  website: string;
};

export default function BookingForm({ branch, initialService: requestedService }: BookingFormProps) {
  const { locale, t } = useLanguage();
  const branchConfig = getBranchConfig(branch);
  const firstService = branchConfig.services[0]?.slug ?? "";
  const initialService =
    requestedService && branchConfig.services.some((service) => service.slug === requestedService)
      ? requestedService
      : firstService;
  const booking = branchConfig.booking;
  const minDateTime = new Date().toISOString().slice(0, 16);

  const [form, setForm] = useState<FormState>({
    service: initialService,
    name: "",
    email: "",
    phone: "",
    date: "",
    notes: "",
    website: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState<"idle" | "success" | "error">("idle");

  const sidebarItems = resolveLocaleValue(booking.sidebarItems, locale);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setStatus("");
    setStatusType("idle");

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ branch, ...form }),
      });

      const result = (await response.json()) as {
        ok: boolean;
        mode?: "local_file" | "webhook" | "email";
        message?: string;
        mailtoUrl?: string;
      };

      if (!response.ok || !result.ok) {
        setStatus(result.message ?? resolveLocaleValue(booking.errorMessage, locale));
        setStatusType("error");
        return;
      }

      if (result.mode === "email" && result.mailtoUrl) {
        window.location.assign(result.mailtoUrl);
      }

      setForm({
        service: initialService,
        name: "",
        email: "",
        phone: "",
        date: "",
        notes: "",
        website: "",
      });
      setStatus(resolveLocaleValue(booking.successMessage, locale));
      setStatusType("success");
    } catch {
      setStatus(resolveLocaleValue(booking.errorMessage, locale));
      setStatusType("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="rounded-[28px] border p-7" style={{ borderColor: "var(--theme-border)", background: "var(--surface)" }}>
          <p className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: "var(--muted-text)" }}>
            {branchConfig.name}
          </p>
          <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">{resolveLocaleValue(booking.title, locale)}</h1>
          <p className="mt-4 text-base leading-7" style={{ color: "var(--muted-text)" }}>
            {resolveLocaleValue(booking.description, locale)}
          </p>
          <div className="mt-8 rounded-[24px] border p-5" style={{ borderColor: "var(--theme-border)", background: "var(--surface-strong)" }}>
            <p className="text-sm font-semibold">{resolveLocaleValue(booking.sidebarTitle, locale)}</p>
            <div className="mt-4 space-y-3 text-sm">
              {sidebarItems.map((item) => (
                <div key={item.label}>
                  <p className="font-medium">{item.label}</p>
                  <p style={{ color: "var(--muted-text)" }}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-[28px] border p-7" style={{ borderColor: "var(--theme-border)", background: "var(--surface)" }}>
          <form className="space-y-5" onSubmit={onSubmit}>
            <div className="hidden" aria-hidden="true">
              <label>Website</label>
              <input
                tabIndex={-1}
                autoComplete="off"
                value={form.website}
                onChange={(event) => setForm((current) => ({ ...current, website: event.target.value }))}
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium">{t.common.fullName}</label>
                <input
                  required
                  value={form.name}
                  onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                  className="w-full rounded-2xl border bg-transparent px-4 py-3 outline-none"
                  style={{ borderColor: "var(--theme-border)" }}
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">{t.common.phone}</label>
                <input
                  required
                  value={form.phone}
                  onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
                  className="w-full rounded-2xl border bg-transparent px-4 py-3 outline-none"
                  style={{ borderColor: "var(--theme-border)" }}
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium">{t.common.email}</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                  className="w-full rounded-2xl border bg-transparent px-4 py-3 outline-none"
                  style={{ borderColor: "var(--theme-border)" }}
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">{t.common.preferredDate}</label>
                <input
                  required
                  type="datetime-local"
                  min={minDateTime}
                  value={form.date}
                  onChange={(event) => setForm((current) => ({ ...current, date: event.target.value }))}
                  className="w-full rounded-2xl border bg-transparent px-4 py-3 outline-none"
                  style={{ borderColor: "var(--theme-border)" }}
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">{t.common.selectService}</label>
              <select
                required
                value={form.service}
                onChange={(event) => setForm((current) => ({ ...current, service: event.target.value }))}
                className="w-full rounded-2xl border bg-transparent px-4 py-3 outline-none"
                style={{ borderColor: "var(--theme-border)" }}
              >
                {branchConfig.services.map((service) => (
                  <option key={service.slug} value={service.slug}>
                    {resolveLocaleValue(service.title, locale)}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">{t.common.projectDetails}</label>
              <textarea
                required
                value={form.notes}
                onChange={(event) => setForm((current) => ({ ...current, notes: event.target.value }))}
                className="min-h-36 w-full rounded-2xl border bg-transparent px-4 py-3 outline-none"
                style={{ borderColor: "var(--theme-border)" }}
              />
              <p className="mt-2 text-xs leading-6" style={{ color: "var(--muted-text)" }}>
                {t.common.notesHint}
              </p>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold disabled:opacity-60"
              style={{ background: "var(--accent)", color: "var(--accent-foreground)" }}
            >
              {submitting ? "..." : resolveLocaleValue(booking.submitLabel, locale)}
            </button>
          </form>

          {status ? (
            <div
              className="mt-5 rounded-2xl border px-4 py-4 text-sm"
              style={{
                borderColor: statusType === "error" ? "rgba(220,38,38,0.25)" : "rgba(22,163,74,0.25)",
                background: statusType === "error" ? "rgba(220,38,38,0.08)" : "rgba(22,163,74,0.08)",
              }}
            >
              {status}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
