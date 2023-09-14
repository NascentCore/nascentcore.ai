/** @type {import('next').NextConfig} */
const { getBlogList } = require("./blog");
const blogList = getBlogList();
const nextConfig = {
  // 服务端缓存 存储 blog 信息
  serverRuntimeConfig: {
    blogList,
  },
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  i18n: {
    defaultLocale: "zh",
    locales: ["en", "zh"],
  },
};

module.exports = nextConfig;
