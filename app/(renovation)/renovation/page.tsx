import BranchHomePage from "@/components/BranchHomePage";
import { buildMetadata } from "@/config/seo";
import { getBranchConfig } from "@/config/site";

export const metadata = buildMetadata(getBranchConfig("renovation").seo.home);

export default function RenovationHomePage() {
  return <BranchHomePage branch="renovation" serviceLimit={5} />;
}
