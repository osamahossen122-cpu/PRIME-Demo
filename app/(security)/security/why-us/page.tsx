import BranchWhyUs from "@/components/BranchWhyUs";
import { buildMetadata } from "@/config/seo";
import { getBranchConfig } from "@/config/site";

export const metadata = buildMetadata(getBranchConfig("security").seo.whyUs);

export default function SecurityWhyUsPage() {
  return <BranchWhyUs branch="security" />;
}
