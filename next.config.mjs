import process from "node:process";

const nextConfig = {
  env: {
    NEXT_PUBLIC_ENV: process.env.NEXT_PUBLIC_ENV,
  },
};

export default nextConfig;
