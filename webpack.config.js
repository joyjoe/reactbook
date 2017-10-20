var path = require("path");
var cleanWebpackPlugin = require("clean-webpack-plugin");
var htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  context: __dirname,
  entry: {
    "app": ["./src/index.js"],
    // "vendor": ["babel-polyfill"]
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name]-[hash:4].js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader", {
            loader: "css-loader",
            // options: {
            //   // modules: true,
            //   // localIdentName: "[name]__[local]__[hash:base64]"
            // }
          }
        ]
      }, 
      {
        test: /\.less$/,
        use: [
          "style-loader", {
            loader: "css-loader",
            // options: {
            //   // modules: true,
            //   // localIdentName: "[name]__[local]__[hash:base64]"
            // }
          },
          {
            loader: "less-loader" 
          }
        ]
      },{
        test: /\.js/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  plugins: [
    new cleanWebpackPlugin(["./dist"], {root: __dirname}),
    new htmlWebpackPlugin({template: "index.html", title: "welcome to react's world", inject: "body"})
  ],
  devServer: {
    contentBase: "./dist",
    hot: true,
    // inline: false
    inline: true
  }
};