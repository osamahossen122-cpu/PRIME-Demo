import AboutContent from "@/components/AboutContent";
import { buildMetadata } from "@/config/seo";
import { getBranchConfig } from "@/config/site";

export const metadata = buildMetadata(getBranchConfig("renovation").seo.about);

export default function RenovationAboutPage() {
  return <AboutContent branch="renovation" />;
}
