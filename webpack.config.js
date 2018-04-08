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
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'out_dir'),
    filename: 'ngxcable.js'
  }
};
