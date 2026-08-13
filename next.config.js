/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",  // ← MUY IMPORTANTE
  images: {
    unoptimized: true,
  },
  // Solo si vas a desplegar en GitHub Pages con subdirectorio
  // basePath: isProd ? "/nombre-de-tu-repositorio" : "",
  // assetPrefix: isProd ? "/nombre-de-tu-repositorio/" : "",
};

module.exports = nextConfig;