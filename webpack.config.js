var path = require("path");
var webpack = require("webpack");
var cleanWebpackPlugin = require("clean-webpack-plugin");
var htmlWebpackPlugin = require("html-webpack-plugin");
var uglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin");
var extractTextWebpackPlugin = require("extract-text-webpack-plugin");
var babiliWebpackPlugin = require("babili-webpack-plugin");

const extractCSS = new extractTextWebpackPlugin({
  filename: "[name].css"
});
const extractLESS = new extractTextWebpackPlugin({
  filename: "[name]-less.css"
});

module.exports = {
  "context": __dirname,
  "entry": {
    // "index": ["./src/script/index.js"],
    // "vendor": ["babel-polyfill"]
    "app": ["./src/script/app.js"],
    "reactVendor": ["react", "react-dom", "react-responsive"],
  // "antdVendor": ["antd"]
  },
  "output": {
    "path": path.resolve(__dirname, "./dist"),
    // path: __dirname,
    "filename": "[name]-[hash:4].js"
  },
  "module": {
    "rules": [
      {
        "test": /\.css$/,
        "use": //[
        //   "style-loader", {
        //     "loader": "css-loader",
        //   // options: {   // modules: true,   // localIdentName:
        //   // "[name]__[local]__[hash:base64]" }
        //   }
        // ]
        extractCSS.extract({
          use: ["css-loader"],
          fallback: "style-loader"
        })
      }, {
        "test": /\.less$/,
        "use": //[
        // "style-loader", {
        //   "loader": "css-loader",
        //   "options": {
        //     "importLoaders": 1
        //   //   modules: true,
        //   //   localIdentName: "[name]__[local]__[hash:base64]"
        //   }
        // }, {
        //   "loader": "less-loader"
        // }
        extractLESS.extract({
          use: [
            {
              "loader": "css-loader",
              "options": {
                "importLoaders": 1
              }
            },
            "less-loader"
          ],
          fallback: "style-loader"
        })
      // ]
      }, {
        "test": /\.js$/,
        "exclude": /node_modules/,
        "use": ["babel-loader", {
          loader: "eslint-loader",
          options: {
            fix: true
          }
        }]
      },
      {
        "test": /\.(jpg|png|jpeg|gif)$/,
        "use": [
          {
            // loader: "url-loader"
            "loader": "file-loader"
          }
        ]
      }
    ]
  },
  "plugins": [
    new cleanWebpackPlugin(["./dist"], {
      "root": __dirname
    }),
    new htmlWebpackPlugin({
      "template": "index.html",
      "title": "welcome to react's world",
      // inject: "body",
      "inject": false,
      "chunks": ["app", "reactVendor"]
    // chunks: ["index"]
    }),
    new uglifyjsWebpackPlugin(),
    // new babiliWebpackPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      "name": "reactVendor",
      "chunks": ["app", "reactVendor"]
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: "antdVendor",
    //   chunks: ["app", "antdVendor"]
    // }),
    extractCSS,
    extractLESS
  ],
  "devServer": {
    "contentBase": "./dist",
    // contentBase: "/",
    "hot": true,
    // inline: false
    "inline": true,
    historyApiFallback: true,
    // "port": 80,
    // "host": process.env.HOST,
    overlay: true
  },
  // devtool: "inline-source-map",
  devtool: "source-map",
  "performance": {
    "hints": "warning",
    maxEntrypointSize: 2048000,
    "maxAssetSize": 600000
  }
};