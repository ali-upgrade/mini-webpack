const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const TestPlugin = require('./plugin/test-plugin.js')
const AnalyzWebpackPlugin = require('./plugin/analyze-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/[name].js',
    clean: true
  },
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   loader: "./loaders/test-loader.js",
      // }
      // {
      //   test: /\.js$/,
      //   use: ["./loaders/demo/test2.js","./loaders/demo/test1.js"]
      // }
      {
        test: /\.js$/,
        // loader: './loaders/demo/test3.js'
        // loader: './loaders/clean-log-loader.js'
        loader: './loaders/banner-loader',
        options: {
          author: "ali"
        }

      },
      {
        test: /\.js$/,
        loader: "./loaders/babel-loader",
        options: {
          presets: ["@babel/preset-env"],
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: "./loaders/file-loader",
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html')
    }),
    // new TestPlugin(),
    new AnalyzWebpackPlugin(),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
    runtimeChunk: {
      name: (entrypoint) => `runtime~${entrypoint.name}`
    }
  },
  mode: 'development',
}