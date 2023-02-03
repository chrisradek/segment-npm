const webpack = require("webpack");

module.exports = {
  entry: {
    dependency: "./src/dependency.js",

    app: {
      import: "./src/index.js",
      dependOn: ["dependency"],
    },
    segment: {
      import: "./src/segment.js",
      dependOn: ["dependency"],
    },
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
