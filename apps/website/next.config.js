const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  // experimental: {
  //   appDir: true,
  //   serverActions: true,
  //   serverComponentsExternalPackages: ["@prisma/client"],
  // },
  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.svg$/,
  //     use: ["@svgr/webpack"],
  //   });

  //   return config;
  // },
};

//Todo: Fix this
// module.exports = withContentlayer(nextConfig);

module.exports = nextConfig;
