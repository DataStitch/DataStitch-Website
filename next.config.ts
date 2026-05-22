import type { NextConfig } from "next";

const fallbackRepository = "datatriad_landing";
const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? fallbackRepository;
const isUserOrOrgPages = repository.endsWith(".github.io");
const isProductionBuild = process.env.NODE_ENV === "production";
const basePath =
  isProductionBuild && repository && !isUserOrOrgPages ? `/${repository}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  basePath,
  assetPrefix: basePath,
};

export default nextConfig;
