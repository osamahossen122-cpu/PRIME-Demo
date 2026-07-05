import Contact from "@/components/Contact";
import { buildMetadata } from "@/config/seo";
import { getBranchConfig } from "@/config/site";

export const metadata = buildMetadata(getBranchConfig("security").seo.contact);

export default function SecurityContactPage() {
  return <Contact branch="security" showMap />;
}
