import BranchServiceArea from "@/components/BranchServiceArea";
import { buildMetadata } from "@/config/seo";
import { getBranchConfig } from "@/config/site";

export const metadata = buildMetadata(getBranchConfig("security").seo.serviceArea);

export default function SecurityServiceAreaPage() {
  return <BranchServiceArea branch="security" />;
}
