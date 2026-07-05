import BranchServiceArea from "@/components/BranchServiceArea";
import { buildMetadata } from "@/config/seo";
import { getBranchConfig } from "@/config/site";

export const metadata = buildMetadata(getBranchConfig("renovation").seo.serviceArea);

export default function RenovationServiceAreaPage() {
  return <BranchServiceArea branch="renovation" />;
}
