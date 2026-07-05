import PrimeLanding from "@/components/PrimeLanding";
import { buildMetadata } from "@/config/seo";
import { siteConfig } from "@/config/site";

export const metadata = buildMetadata(siteConfig.home.seo, siteConfig.brand);

export default function HomePage() {
  return <PrimeLanding />;
}
