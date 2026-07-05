import Contact from "@/components/Contact";
import { buildMetadata } from "@/config/seo";
import { getBranchConfig } from "@/config/site";

export const metadata = buildMetadata(getBranchConfig("renovation").seo.contact);

export default function RenovationContactPage() {
  return <Contact branch="renovation" showMap />;
}
