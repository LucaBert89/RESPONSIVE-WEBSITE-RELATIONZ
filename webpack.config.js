const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode:"production",
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "index.html")
      }),
      new MiniCssExtractPlugin({
        filename: "style.css"
      })],
     module: {
          rules: [
            {
              test: /\.scss$/,
              use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                 "sass-loader"
              ],
            },
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/,
              exclude: /node_modules/,
              loader: 'file-loader',
              options: {
                name: "[name].[ext]",
                outputPath: 'fonts/'
              } 
            }
          ]
        }, 
  
};