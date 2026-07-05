import { notFound } from "next/navigation";
import ServiceDetail from "@/components/ServiceDetail";
import { buildServiceMetadata } from "@/config/seo";
import { getBranchConfig, getBranchService } from "@/config/site";

type SecurityServicePageProps = {
  params: Promise<{ slug: string }>;
};

export default async function SecurityServicePage({ params }: SecurityServicePageProps) {
  const { slug } = await params;
  const service = getBranchService("security", slug);

  if (!service) notFound();

  return <ServiceDetail branch="security" slug={slug} />;
}

export async function generateMetadata({ params }: SecurityServicePageProps) {
  const { slug } = await params;
  const service = getBranchService("security", slug);
  const branch = getBranchConfig("security");

  if (!service) {
    return buildServiceMetadata(branch.seo.services.path, branch.seo.services.title, branch.seo.services.description);
  }

  return buildServiceMetadata(`${branch.path}/services/${slug}`, service.seo.title, service.seo.description);
}

export async function generateStaticParams() {
  return getBranchConfig("security").services.map((service) => ({ slug: service.slug }));
}
