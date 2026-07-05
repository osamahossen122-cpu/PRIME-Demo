import BranchWhyUs from "@/components/BranchWhyUs";
import { buildMetadata } from "@/config/seo";
import { getBranchConfig } from "@/config/site";

export const metadata = buildMetadata(getBranchConfig("renovation").seo.whyUs);

export default function RenovationWhyUsPage() {
  return <BranchWhyUs branch="renovation" />;
}
