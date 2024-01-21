const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

module.exports = async () => {
    const {
        env: {
            NODE_ENV
        }
    } = process;

    const plugins = [
        new Dotenv({
            systemvars: true
        }),
        new HtmlWebpackPlugin({
            // favicon: './src/assets/icons/favicon.ico',
            filename: 'index.html',
            path: path.join(__dirname, '../dist/'),
            template: './src/index.html'
        })
    ];

    const entry = './src/index.js';

    return ({
        devServer: {
            historyApiFallback: true,
            hot: true,
            open: true,
            port: 3000
        },
        entry,
        mode: NODE_ENV,
        module: {
            rules: [
                {
                    exclude: /node_modules/,
                    test: /\.jsx?$/i,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/preset-env',
                                    {
                                        targets: {
                                            chrome: 100
                                        }
                                    }
                                ],
                                [
                                    '@babel/preset-react',
                                    {
                                        runtime: 'automatic'
                                    }
                                ]
                            ],
                            sourceType: 'unambiguous'
                        }
                    }
                },
                {
                    test: /\.scss$/i,
                    use: [
                        'style-loader',
                        'css-loader',
                        'postcss-loader',
                        'sass-loader'
                    ]
                }
            ]
        },
        output: {
            clean: true,
            filename: 'bundle.[fullhash].js',
            path: path.resolve(__dirname, 'dist')
        },
        plugins,
        resolve: {
            alias: {
                '@components': path.resolve(__dirname, 'src/components'),
                '@constants': path.resolve(__dirname, 'src/constants.ts'),
                '@modules': path.resolve(__dirname, 'src/modules'),
                '@styles': path.resolve(__dirname, 'src/styles'),
                '@utils': path.resolve(__dirname, 'src/utils')
            },
            extensions: [
                '.jsx',
                '.js'
            ]
        }
    });
};
