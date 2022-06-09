const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");


module.exports = {
    mode: "production",
    context: __dirname,
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "./build")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "./src/assets",
                    to: "./assets"
                },
                {
                    from: "./src/styles",
                    to: "./styles"
                }
            ]
        }),
        new CleanWebpackPlugin()
    ]
};