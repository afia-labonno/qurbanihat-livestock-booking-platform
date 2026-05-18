/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  
  images: {
    remotePatterns: [
      {
        protocol: 'https' ,
        hostname: '**',
        port : '',
      },
      
      {
        protocol: 'http' ,
        hostname: '**',
        port : '',
      }
    ]
  }
};

export default nextConfig;
