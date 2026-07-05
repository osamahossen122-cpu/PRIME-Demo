import BranchHomePage from "@/components/BranchHomePage";
import { buildMetadata } from "@/config/seo";
import { getBranchConfig } from "@/config/site";

export const metadata = buildMetadata(getBranchConfig("security").seo.home);

export default function SecurityHomePage() {
  return <BranchHomePage branch="security" />;
}
