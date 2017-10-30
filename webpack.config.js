var path = require("path");
var cleanWebpackPlugin = require("clean-webpack-plugin");
var htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  context: __dirname,
  entry: {
    // "index": ["./src/script/index.js"],
    // "vendor": ["babel-polyfill"]
    "app": ["./src/script/app.js"]
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    // path: __dirname,
    filename: "[name]-[hash:4].js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader", {
            loader: "css-loader",
          // options: {   // modules: true,   // localIdentName:
          // "[name]__[local]__[hash:base64]" }
          }
        ]
      }, {
        test: /\.less$/,
        use: [
          "style-loader", {
            loader: "css-loader",
            options: {
              "importLoaders": 1
            //   modules: true,
            //   localIdentName: "[name]__[local]__[hash:base64]"
            }
          }, {
            loader: "less-loader"
          }
        ]
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(jpg|png|jpeg|gif)$/,
        use: [
          {
            // loader: "url-loader"
            loader: "file-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new cleanWebpackPlugin(["./dist"], {
      root: __dirname
    }),
    new htmlWebpackPlugin({
      template: "index.html",
      title: "welcome to react's world",
      // inject: "body",
      inject: false,
      chunks: ["app"]
    // chunks: ["index"]
    })
  ],
  devServer: {
    contentBase: "./dist",
    // contentBase: "/",
    hot: true,
    // inline: false
    inline: true,
    historyApiFallback: true
  },
  devtool: "inline-source-map"
};