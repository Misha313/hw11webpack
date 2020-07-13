const path = require('path');
const WebpackMd5Hash = require('webpack-md5-hash');

module.exports = {
  entry: './src/script.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: { loader: 'babel-loader' },
      exclude: /node_modules/
    }]
  },
  plugins: [
    new WebpackMd5Hash()
  ]
}