import BookingForm from "@/components/BookingForm";
import { buildMetadata } from "@/config/seo";
import { getBranchConfig } from "@/config/site";

export const metadata = buildMetadata(getBranchConfig("renovation").seo.book);

type RenovationBookPageProps = {
  searchParams: Promise<{ service?: string | string[] }>;
};

export default async function RenovationBookPage({ searchParams }: RenovationBookPageProps) {
  const service = (await searchParams).service;
  return <BookingForm branch="renovation" initialService={typeof service === "string" ? service : undefined} />;
}
