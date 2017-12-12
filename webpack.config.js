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
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader', 'css-loader?importLoaders=1', 'font-loader?format[]=truetype&format[]=woff&format[]=embedded-opentype' ]
      }, 
      { test: /\.json$/, loader: 'json-loader' },
      {
        test: /\.(txt|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}  
          }
        ]
      }
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