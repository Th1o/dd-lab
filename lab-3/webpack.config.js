const path = require('path');
// const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpack = require('clean-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    context: path.resolve(__dirname, 'src'),

    entry: {
        app: './entry'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.s?css$/,
                use: extractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [
                                    autoprefixer({
                                        browsers:['ie >= 8', 'last 4 version']
                                    })
                                ]
                            }
                        },
                        'sass-loader',
                    ]
                })
            }
        ]
    },

    plugins: [
        new htmlWebpackPlugin({
            template: './index.html'
        }),
        new cleanWebpack(
            path.resolve(__dirname, 'dist'), {
                watch: true
            }

        ),
        new extractTextPlugin('[name].css')
    ],
    devServer: {
        port: 8080
    }
}

module.exports = config;