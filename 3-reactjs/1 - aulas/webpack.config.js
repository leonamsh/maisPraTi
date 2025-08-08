const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development", // Set the mode to development
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
    clean: true, // Clean the output directory before emit
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  plugins: [
    // You can add plugins here if needed
    new HtmlWebpackPlugin(),
  ],
};
