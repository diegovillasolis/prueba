const path = require('path');
const Dotenv = require('dotenv-webpack');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/, },
      { test: /\.scss$/, loaders: [ 'style', 'css-loader', 'sass' ]},
      { test: /\.css$/, loaders: [ 'style-loader', 'css-loader', 'font-loader']}, 
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.(eot|woff|woff2|svg|ttf|txt|jpg|gif|png)([\?]?.*)$/, loader: "file-loader" },
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    port: 3000,
  },
  plugins: [HtmlWebpackPluginConfig, new Dotenv(),
    new CopyWebpackPlugin([{
       from: 'public/assets/city.list.json', to: 'public/assets/city.list.json' },
       { from: 'public/assets/images', to: 'public/assets/images' },
      ]),

  ]
};