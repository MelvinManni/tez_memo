const { defineConfig } = require("@vue/cli-service");
var webpack = require('webpack');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      fallback: {
        path: require.resolve("path-browserify"),
        stream: require.resolve("stream-browserify"),
        buffer: require.resolve("buffer"),
        crypto: false,
      },
    },
    plugins: [
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
      }),
    ],
  },
});
