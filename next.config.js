const path = require("path");

module.exports = {
  reactStrictMode: true,
  compress: true,
  include: path.resolve(__dirname, "src/assets"),
  webpack(config, options) {
    return config;
  },
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };

    return config;
  },
  images: {
    domains: ["static.femaledaily.com", "imgcdn.femaledaily.com"],
  },
};
