/*
 * @Date: 2020-07-20 20:24:40
 * @Description:
 * @Author:
 * @LastEditors: YooHoeh
 * @LastEditTime: 2020-07-21 09:58:20
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
                exclude: /(node_modules|bower_components)/,
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
    optimization: { minimize: false },
};
