module.exports = {
  entry:[
    './src/index.js'
  ],
  output: {
    path: __dirname,
    filename: 'app/js/main.js'
  },
  module: {
    loader: [
        {
          test: /\.jsx?$/,
          loader: 'babel',
          exclude: /node_modules/
        }
    ]
  }
}