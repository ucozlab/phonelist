const autoprefixer = require('autoprefixer');
const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

function tryResolve_(url, sourceFilename) {
  // Put require.resolve in a try/catch to avoid node-sass failing with cryptic libsass errors
  // when the importer throws
  try {
    return require.resolve(url, {paths: [path.dirname(sourceFilename)]});
  } catch (e) {
    return '';
  }
}

function tryResolveScss(url, sourceFilename) {
  // Support omission of .scss and leading _
  const normalizedUrl = url.endsWith('.scss') ? url : `${url}.scss`;
  return tryResolve_(normalizedUrl, sourceFilename) ||
    tryResolve_(path.join(path.dirname(normalizedUrl), `_${path.basename(normalizedUrl)}`),
      sourceFilename);
}

function materialImporter(url, prev) {
  if (url.startsWith('@material')) {
    const resolved = tryResolveScss(url, prev);
    return {file: resolved || url};
  }
  return {file: url};
}

module.exports = [{
  entry: ['./client/styles/app.scss', './client/App.js'],
  output: {
    // This is necessary for webpack to compile
    // But we never use style-bundle.js
    filename: 'bundle.js',
    // publicPath: '/public/',
    path: path.resolve(__dirname, 'public'), //__dirname + '/public/',
  },
  // plugins: [new HtmlWebpackPlugin({
  //   title: 'Phone list App made with love on React, SCSS, NodeJS, MongoDB and Heroku free hosting',
  //   meta: {
  //     viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
  //   },
  //   template: path.resolve(__dirname, 'public/index.html')
  // })],
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
                importer: materialImporter,
                includePaths: ['./node_modules'],
              },
            },
          }
        ],
      },
      {
        test: /\.html/,
        use: [
          {
            loader: 'file-loader?name=[name].[ext]',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ["@babel/preset-react"]
        }
      }
    ],
  },
}];
