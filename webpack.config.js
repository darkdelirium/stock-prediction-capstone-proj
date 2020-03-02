/*
    ./webpack.config.js
*/

// Imports: Dependencies
const path = require("path");
require("babel-register");
var HtmlWebpackPlugin = require("html-webpack-plugin");

// Webpack Configuration
const config = {
  // Entry
  entry: "./src/index.js",

  // Output
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/"
  },

  devServer: {
    historyApiFallback: true,
    contentBase: "./",
    hot: true
  },

  // Loaders
  module: {
    rules: [
      // JavaScript/JSX Files
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      // CSS-Modules *.modules.css
      {
        test: /\.module\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: { localIdentName: "[name]__[local]___[hash:base64:5]" }
            }
          }
        ]
      },
      // CSS Files
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        //loader: "style-loader!css-loader?modules"
        use: ["style-loader", "css-loader"]
      },

      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: "file-loader"
          }
        ]
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: "style-loader" // inject CSS to page
          },
          {
            loader: "css-loader" // translates CSS into CommonJS modules
          },
          {
            loader: "postcss-loader", // Run post css actions
            options: {
              plugins: function() {
                // post css plugins, can be exported to postcss.config.js
                return [require("precss"), require("autoprefixer")];
              }
            }
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      }
    ]
  },

  // Plugins
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })]
};

// Exports
module.exports = config;