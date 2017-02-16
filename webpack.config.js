var config = {
  entry: __dirname + "/src/main.js",

  output: {
    path: __dirname,
    filename: 'index.js',
  },

  devServer: {
    inline: true,
    port: 3000,
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',

        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}

module.exports = config;
