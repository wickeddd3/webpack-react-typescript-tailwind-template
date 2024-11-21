const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development", // Change to 'development' for development mode
  target: "web",
  entry: "./src/index.tsx", // Entry point
  output: {
    filename: "bundle.js", // Output file name
    path: path.resolve(__dirname, "dist"), // Output directory
    assetModuleFilename: "images/[name][ext]",
  },
  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 3000, // Development server port
  },
  plugins: [
    new CleanWebpackPlugin(), // Cleans output directory before each build
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Template for the HTML file
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(tsx|ts|jsx|js)$/, // TypeScript, TSX, JavaScript, and JSX files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env", // Transpile modern JS
              ["@babel/preset-react", { runtime: "automatic" }], // Transpile JSX
              "@babel/preset-typescript", // Transpile TypeScript
            ],
          },
        },
      },
      {
        test: /\.css$/, // CSS files
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/, // Images
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"], // Resolve these extensions, for omitting file extension on import
  },
};
