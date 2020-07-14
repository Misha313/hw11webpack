const path = require('path');
const WebpackMd5Hash = require('webpack-md5-hash');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/script.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            "@babel/preset-env",
          ],
          plugins: [
            "@babel/plugin-syntax-dynamic-import",
            "@babel/plugin-proposal-class-properties"
          ]
        }
      },
      exclude: /node_modules/

    }]
  },
  plugins: [
    new WebpackMd5Hash(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
  ]
}


// rules: [
//   {
//     test: [/\.js$/, /\.scss$/], // include .js files
//     enforce: "pre", // preload the jshint loader
//     exclude: /node_modules/, // exclude any and all files in the `node_modules folder`
//     use: [

//       { loader: "style-loader" },
//       { loader: "css-loader" },
//       { loader: "postcss-loader" },
//       { loader: "babel-loader" },
//       {
//         options: {
//           presets: [
//             "@babel/preset-env",
//             "@babel/preset-react"
//           ],
//           plugins: [
//             "@babel/plugin-syntax-dynamic-import",
//             "@babel/plugin-proposal-class-properties"
//           ]
//         }

//       },

//     ]
//   }
// ]