const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    "babel-polyfill",
    "webpack-hot-middleware/client",
    "react-hot-loader/patch",
    "prismjs",
    "./index.js"
  ],

  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "dist"),
    publicPath: "/dist"
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: "babel-loader",
      include: __dirname,
      query: {
        presets: ['babel-preset-env'],
        plugins: [
          'transform-react-jsx',
          'transform-object-rest-spread',
          'transform-runtime'
        ]
      }
    }, {
      test: /\.css$/,
      loaders: ["style-loader", "raw-loader"],
      include: __dirname
    }, {
      test: /\.svg$/,
      loader: "url-loader?limit=10000&mimetype=image/svg+xml",
      include: path.join(__dirname, "presentation")
    }, {
      test: /\.png$/,
      loader: "url-loader?mimetype=image/png",
      include: path.join(__dirname, "presentation")
    }, {
      test: /\.jpg$/,
      loader: "url-loader?mimetype=image/jpg",
      include: path.join(__dirname, "presentation")
    }],
  },

  devtool: "cheap-module-source-map"
}
