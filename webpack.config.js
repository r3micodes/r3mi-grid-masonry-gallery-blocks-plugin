const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const path = require("path");

module.exports = {
  ...defaultConfig,

  resolve: {
    ...defaultConfig.resolve,
    alias: {
      ...defaultConfig.resolve.alias,

      "@css": path.resolve(__dirname, "assets/css"),
      "@blocks": path.resolve(__dirname, "src/blocks"),
      "@components": path.resolve(__dirname, "src/components"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@assetsStyles": path.resolve(__dirname, "src/assets/css"),
      "@assetsJS": path.resolve(__dirname, "src/assets/js"),
    },
  },
};
