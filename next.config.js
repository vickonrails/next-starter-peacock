module.exports = {
  entry: './app',
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: 'node_modules',
        loader: 'babel',
        query: { presets: ['es2015'] },
      },
    ],
  },
  target: 'node',
};
