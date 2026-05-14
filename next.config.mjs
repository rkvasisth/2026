/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  serverExternalPackages: [
    "@googlemaps/js-api-loader",
    "tailwindcss",
    "@tailwindcss/postcss",
  ],
};

export default nextConfig;
