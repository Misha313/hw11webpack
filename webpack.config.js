const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackMd5Hash = require('webpack-md5-hash');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssnanoPlugin = require('cssnano-webpack-plugin');


module.exports = {
  entry: './src/script.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
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
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },

      {
        test: /\.(woff|woff2|ttf|)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: './fonts/[name].[ext]'
          }
        }
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader?name=./images/[name].[ext]&esModule=false',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      }
    ]
  },
  optimization: {
    minimizer: [
      new CssnanoPlugin()
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/index.html',
      filename: 'index.html'
    }),
    new WebpackMd5Hash()
  ]
}

