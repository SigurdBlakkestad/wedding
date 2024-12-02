/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'i.pinimg.com' },
      { hostname: 'tenersboots.com' },
    ],
  },
};

export default nextConfig;
