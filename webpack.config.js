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
  optimization: {
    splitChunks: {
      minSize: 0,
      maxInitialRequests: Infinity,
      cacheGroups: {
        ajs: {
          chunks: "all",
          minChunks: 2,
          enforce: true,
          name: "ajs",
          test(module) {
            if (module.isEntryModule()) {
              return false;
            }

            return isSegmentDependency(module);
          },
          reuseExistingChunk: true,
        },
      },
    },
  },
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

function isSegmentDependency(module) {
  const SEGMENT_REGEX = /[\\/]node_modules[\\/]\@segment[\\/]/;

  while (module) {
    if (module.identifier().match(SEGMENT_REGEX)) {
      return true;
    }

    module = module.issuer;
  }

  return false;
}
