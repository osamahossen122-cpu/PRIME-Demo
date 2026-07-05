import AboutContent from "@/components/AboutContent";
import { buildMetadata } from "@/config/seo";
import { getBranchConfig } from "@/config/site";

export const metadata = buildMetadata(getBranchConfig("security").seo.about);

export default function SecurityAboutPage() {
  return <AboutContent branch="security" />;
}
