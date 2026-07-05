import BranchShell from "@/components/BranchShell";
import { getBranchConfig, siteConfig } from "@/config/site";

export default function SecurityLayout({ children }: { children: React.ReactNode }) {
  const branch = getBranchConfig("security");
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: branch.name,
    parentOrganization: siteConfig.brand,
    telephone: branch.phone,
    email: branch.email,
    address: branch.address,
    areaServed: branch.serviceAreas,
  };

  return (
    <BranchShell branch="security">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {children}
    </BranchShell>
  );
}
