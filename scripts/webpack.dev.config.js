const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin')

function resolve(relatedPath) {
    return path.join(__dirname, relatedPath)
}

module.exports = {
    entry: resolve('../src/app.js'),
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/, // 匹配.js文件
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
        ]
    },
    devServer: {
        hot: true, // 热替换
        contentBase: path.join(__dirname, 'dist'), // server文件的根目录
        compress: true, // 开启gzip
        port: 8080, // 端口
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: resolve('../src/index.html'),
            dlls: [],
        })
    ]
}