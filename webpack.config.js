const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const RobotstxtPlugin = require("robotstxt-webpack-plugin");

module.exports = {
    // mode: 'development',
    entry: './src/main.tsx',
    // devtool: 'inline-source-map',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        static: './dist',
        port: 8080,
        historyApiFallback: true,
        proxy: {
            "/api/**": {
                target: "http://localhost",
                secure: false,
                changeOrigin: true,
                loglevel: 'debug'
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            // {
            //     test: /\.css?$/,
            //     use: ['style-loader', 'css-loader', 'postcss-loader'],
            //     exclude: /node_modules/,
            // },
            // {
            //     test: /\.(png|jpg|gif)$/i,
            //     loader: 'file-loader',
            //     options: {
            //         name: './public/[name].[ext]'
            //     },
            // }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        // fallback: {
        //     "crypto": false
        // }
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html',
            // favicon: './public/icon.png'
        }),
      //   new RobotstxtPlugin({
      //       filePath: "./robots.txt"
      //   }),
    ],
}