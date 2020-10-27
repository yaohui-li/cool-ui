const path = require("path");
function resolve(dir) {
  return path.resolve(__dirname, dir);
}
module.exports = {
  productionSourceMap: false,
  css: {
    extract: false
  },
  pages: {
    index: {
      entry: "examples/main.js",
      template: "public/index.html",
      filename: "index.html"
    }
  },
  configureWebpack: {
    output: {
      libraryExport: "default"
    },
    resolve: {
      extensions: [".js", ".vue", ".json"],
      alias: {
        "@": resolve("packages"),
        assets: resolve("examples/assets"),
        views: resolve("examples/views")
      }
    },
    devServer: {
      port: 1680,
      hot: true,
      open: "Google Chrome"
    }
  }
};
