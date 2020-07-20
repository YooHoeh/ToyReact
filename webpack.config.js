/*
 * @Date: 2020-07-20 20:24:40
 * @Description:
 * @Author:
 * @LastEditors: YooHoeh
 * @LastEditTime: 2020-07-20 21:57:45
 */
var path = require("path");
module.exports = {
    entry: "./main.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js",
    },
    module: {
        rules: [
            {
                test: /\.js?$/i,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"],
                            plugins: [
                                [
                                    "@babel/plugin-transform-react-jsx",
                                    {
                                        pragma: "ToyReact.createElement",
                                    },
                                ],
                            ],
                        },
                    },
                ],
                exclude: /node_modules/,
            },
        ],
    },
    mode: "development",
};
