const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin')

function resolve(relatedPath) {
    return path.join(__dirname, relatedPath)
}

module.exports = {
    entry: resolve('../app/main.js'),
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: resolve('../app/index.html'),
            dlls: [],
        })
    ]
}