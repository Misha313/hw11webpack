const path = require('path');
const WebpackMd5Hash = require('webpack-md5-hash');

module.exports = {
  entry: './src/script.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    new WebpackMd5Hash()
  ]
}