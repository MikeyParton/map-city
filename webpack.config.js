const path = require('path')

module.exports = {
  context: __dirname,
  entry: './js/ClientApp.js',
  output: { 
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /.json?$/,
        loader: 'json-loader'
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
}