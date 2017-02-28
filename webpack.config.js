var webpack = require('webpack');
var NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    context: __dirname + '/js/src',
    entry: {
        main: './main.js',
        about: './about.js'
    },
    output: {
        path: __dirname + '/js/dist',
        publicPath: '/js/dist/',
        filename: "[name].js",
        chunkFilename: '[id].[name].js',
        library: '[name]'
    },
    watch: NODE_ENV == 'development',
    watchOptions: {
        aggregateTimeout: 100
    },
    devtool: NODE_ENV == 'development' ? 'cheap-inline-module-source-map' : false,
    resolve: {
        modules: ['node_modules'],
        extensions: ['*', '.js']
    },
    resolveLoader: {
        modules: ['node_modules'],
        moduleExtensions: ['-loader'],
        extensions: ['*', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel'
            }
        ]
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            chunks: ['main', 'about']
        }),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV),
            LANG: JSON.stringify('ru')
        })
    ]
};

if(NODE_ENV == 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
    );
}