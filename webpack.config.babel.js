import path from 'path';

export default {
  context: __dirname,
  entry: path.resolve(__dirname, './src/App.js'),
  devtool: 'cheap-eval-source-map',
  output: {
    path: path.join(__dirname, 'public/'),
    filename: 'bundle.js'
  },
  devServer: {
    publicPath: '/public/',
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      }
    ]
  }
};
