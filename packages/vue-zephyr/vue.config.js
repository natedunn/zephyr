const addVueRawPreLoader = require("vue-raw-pre");
const path = require("path");

module.exports = {
  outputDir: path.resolve(__dirname, ".build"),
  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: false
    },
    autoRouting: {
      chunkNamePrefix: 'page-',
      importPrefix: "@/pages/",
      pages: "src/pages",
      nested: true,
    }
  },
  chainWebpack: (config) => {
    addVueRawPreLoader(config);
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Vue Zephyr'
        return args
      })
  },
};
