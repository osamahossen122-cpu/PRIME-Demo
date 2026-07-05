import BookingForm from "@/components/BookingForm";
import { buildMetadata } from "@/config/seo";
import { getBranchConfig } from "@/config/site";

export const metadata = buildMetadata(getBranchConfig("security").seo.book);

type SecurityBookPageProps = {
  searchParams: Promise<{ service?: string | string[] }>;
};

export default async function SecurityBookPage({ searchParams }: SecurityBookPageProps) {
  const service = (await searchParams).service;
  return <BookingForm branch="security" initialService={typeof service === "string" ? service : undefined} />;
}
