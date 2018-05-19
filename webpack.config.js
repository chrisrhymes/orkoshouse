const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: ['./src/js/main.js', './src/styles/styles.scss'],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'assets')
  },
  module: {
      rules: [{
          test: /\.s?[ac]ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader"
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
            },
          },
        ],
      }
    ]
  },
  plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new UglifyJsPlugin({
          extractComments: true,
          sourceMap: false
        }),
        new OptimizeCssAssetsPlugin({
          cssProcessorOptions: { discardComments: { removeAll: true } }
        }),
    ],
};