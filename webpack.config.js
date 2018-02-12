const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './src/app.jsx'
  ],
  externals:{
    jquery: 'jQuery',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  resolve: {
    alias:{
      components: path.resolve(__dirname, 'src', 'components'),
      api: path.resolve(__dirname, 'src', 'api'),
      appStyles: path.resolve(__dirname, 'src', 'styles')
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders:[
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  devtool: 'cheap-module-eval-source-map'
};