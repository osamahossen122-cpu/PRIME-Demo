import Services from "@/components/Services";
import { buildMetadata } from "@/config/seo";
import { getBranchConfig } from "@/config/site";

export const metadata = buildMetadata(getBranchConfig("renovation").seo.services);

export default function RenovationServicesPage() {
  return <Services branch="renovation" />;
}
