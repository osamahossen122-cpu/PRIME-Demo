import Services from "@/components/Services";
import { buildMetadata } from "@/config/seo";
import { getBranchConfig } from "@/config/site";

export const metadata = buildMetadata(getBranchConfig("security").seo.services);

export default function SecurityServicesPage() {
  return <Services branch="security" />;
}
