import type { MetadataRoute } from "next";
import { getAbsoluteUrl } from "@/config/seo";
import { branchOrder, getBranchConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/"];

  for (const branch of branchOrder) {
    const branchConfig = getBranchConfig(branch);
    routes.push(branchConfig.path);
    routes.push(`${branchConfig.path}/services`);
    routes.push(`${branchConfig.path}/about`);
    routes.push(`${branchConfig.path}/contact`);
    routes.push(`${branchConfig.path}/book`);

    for (const service of branchConfig.services) {
      routes.push(`${branchConfig.path}/services/${service.slug}`);
    }
  }

  return routes.map((path) => ({
    url: getAbsoluteUrl(path),
    lastModified: new Date(),
    changeFrequency: path.includes("/services/") ? "monthly" : "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
