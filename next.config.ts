import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const repositoryName = 'BRFHasselbackeniMell-sa';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isGitHubPages ? `/${repositoryName}` : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
