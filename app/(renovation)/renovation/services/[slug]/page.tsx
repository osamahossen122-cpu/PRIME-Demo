import { notFound } from "next/navigation";
import ServiceDetail from "@/components/ServiceDetail";
import { buildServiceMetadata } from "@/config/seo";
import { getBranchConfig, getBranchService } from "@/config/site";

type RenovationServicePageProps = {
  params: Promise<{ slug: string }>;
};

export default async function RenovationServicePage({ params }: RenovationServicePageProps) {
  const { slug } = await params;
  const service = getBranchService("renovation", slug);

  if (!service) notFound();

  return <ServiceDetail branch="renovation" slug={slug} />;
}

export async function generateMetadata({ params }: RenovationServicePageProps) {
  const { slug } = await params;
  const service = getBranchService("renovation", slug);
  const branch = getBranchConfig("renovation");

  if (!service) {
    return buildServiceMetadata(branch.seo.services.path, branch.seo.services.title, branch.seo.services.description);
  }

  return buildServiceMetadata(`${branch.path}/services/${slug}`, service.seo.title, service.seo.description);
}

export async function generateStaticParams() {
  return getBranchConfig("renovation").services.map((service) => ({ slug: service.slug }));
}
