const path = require('path');

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
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/,
      options:
        {
          presets:['es2015', 'es2016','react', 'stage-0']
        } },
      { test: /\.scss$/, loaders: [ 'style', 'css', 'sass' ]}
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    port: 3000,
  },
  plugins: [HtmlWebpackPluginConfig]
};