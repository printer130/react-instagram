const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  output: {
    filename: 'instagram.bundle.js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
}
