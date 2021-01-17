const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackMd5Hash = require("webpack-md5-hash");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = (env, argv) => ({
  entry: {
    main: "./src/app.js",
  },
  node: {
    fs: "empty",
  },
  resolve: {
    extensions: [".js", ".scss"],
    alias: {
      "@": path.resolve("src"),
    },
  },
  devtool: argv.mode === "production" ? false : "source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    chunkFilename:
      argv.mode === "production"
        ? "chunks/[name].[chunkhash].js"
        : "chunks/[name].js",
    filename:
      argv.mode === "production" ? "[name].[chunkhash].js" : "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        loader: "eslint-loader",
        exclude: /node_modules/,
        options: {
          emitWarning: true,
          configFile: "./.eslintrc.js",
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin("dist", {}),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: "./index.html",
      filename: "index.html",
    }),
    new Dotenv({
      path: "./.env", // Path to .env file (this is the default)
      safe: true, // load .env.example (defaults to "false" which does not use dotenv-safe)
    }),
    new WebpackMd5Hash(),
    new CopyWebpackPlugin([
      {
        from: "./src/assets",
        to: "./assets",
      },
    ]),
    new CompressionPlugin({
      algorithm: "gzip",
    }),
  ],
  devServer: {
    contentBase: "dist",
    watchContentBase: true,
    port: 3000,
  },
});
