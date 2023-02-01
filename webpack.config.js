const webpack = require("webpack");

module.exports = {
  entry: {
    app: "./src/index.js",
    segment: "./src/segment.js",
  },
  mode: "none",
  output: {
    filename: "[name].js",
    path: `${__dirname}/dist`,
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
          plugins: [
            [
              "@babel/plugin-transform-runtime",
              {
                regenerator: true,
              },
            ],
          ],
          cacheDirectory: true,
        },
      },
    ],
  },
};
