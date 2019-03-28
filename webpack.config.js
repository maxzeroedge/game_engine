const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};

/*
,
  devServer: {
    contentBase: [path.join(__dirname, 'dist'), path.join(__dirname, 'assets')],
    compress: true,
    index: 'index.html',
    hot: true,
    port: 9100
  }
*/