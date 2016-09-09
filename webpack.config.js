const webpack = require("webpack");
const path = require("path");
const rucksack = require("rucksack-css");
const ConfigPlugin = require("webpack-config-plugin");

module.exports = {
  context: path.join(__dirname, "./src"),
  entry: {
    js: "./app.js",
    html: "./index.html",
    vendor: ["react"],
  },
  output: {
    path: "dist",
    filename: "bundle.js",
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
      {
        test: /\.css$/,
        include: /src/,
        loaders: [
          "style-loader",
          "css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]",
          "postcss-loader"
        ]
      },
      {
        test: /\.css$/,
        exclude: /src/,
        loader: "style!css"
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel-loader"],
      },
      {
        test: /\.(jpeg|jpg|png)$/,
        loader: "url-loader",
      },
    ]
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  postcss: [
    rucksack({
      autoprefixer: true
    })
  ],
  plugins: [
    new webpack.DefinePlugin({
      "process.env": { NODE_ENV: JSON.stringify(process.env.NODE_ENV || "development") }
    }),
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
    new ConfigPlugin({ dir: path.join(__dirname, "./config")})
  ],
  devServer: {
    contentBase: "./src",
    hot: true
  }
};
