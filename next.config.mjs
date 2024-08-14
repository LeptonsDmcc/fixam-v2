/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fixamdev.fra1.digitaloceanspaces.com",
        // pathname: '**',
      },
    ],
  },
};

export default nextConfig;
