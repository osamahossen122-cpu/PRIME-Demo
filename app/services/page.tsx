import type { Metadata } from "next";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "All Services | Prime GMBH",
  description: "Browse all services offered by Prime GMBH across renovation and security branches.",
};

export default function AllServicesPage() {
  return (
    <main>
      <Services branch="renovation" />
      <Services branch="security" />
    </main>
  );
}
