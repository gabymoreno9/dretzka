const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpackHTML = new HtmlWebpackPlugin({ template: './src/index.html' })


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/assets/',
        filename: 'app.bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: ['./src', './node_modules']
    },

    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: { loader: 'babel-loader' }
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.(png|gif|svg)$/,
            use: ['file-loader']
        }]
    },

    plugins: [webpackHTML],
    devServer: {
        port: 8080,
        contentBase: './build',
        historyApiFallback: { index: '/' }
    }
}
