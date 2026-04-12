/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // "image": "https://i.pinimg.com/736x/c6/09/0d/c6090df18193e2616a6a32076883b70c.jpg",

  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        port: '',
        pathname: '/**',
        search: '',
      },
       {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'png.pngtree.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
