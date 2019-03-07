const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

module.exports = {
  mode: "production",
  devtool: "inline-source-map",
  entry: "./index.ts",
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          ecma: 6,
        },
      }),
      new webpack.ContextReplacementPlugin(
        /\@angular(\\|\/)core(\\|\/)esm5/,
        path.join(__dirname, './')
      )
    ]
  },
  output: {
    path: path.resolve(__dirname, 'out_dir'),
    filename: 'ngxcable.min.js',
    library: 'ngxcable'
  }
};
