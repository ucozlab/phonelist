const autoprefixer = require('autoprefixer');
const path = require('path');

module.exports = [{
  entry: ['./client/styles/app.scss', './client/scripts/app.js'],
  output: {
    // This is necessary for webpack to compile
    // But we never use style-bundle.js
    filename: 'bundle.js',
    publicPath: '/public/',
    path: path.resolve(__dirname, 'public'), //__dirname + '/public/',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'bundle.css',
            },
          },
          {loader: 'extract-loader'},
          {loader: 'css-loader'},
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  autoprefixer()
                ]
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              // Prefer Dart Sass
              implementation: require('sass'),

              // See https://github.com/webpack-contrib/sass-loader/issues/804
              webpackImporter: false,
              sassOptions: {
                includePaths: ['./node_modules'],
              },
            },
          }
        ],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    ],
  },
}];
