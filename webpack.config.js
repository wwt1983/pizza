var path = require('path')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var HappyPack = require('happypack')

module.exports = {
    entry: [
        'babel-polyfill',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    resolve: {
        modulesDirectories: ["node_modules"]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
            }
        }),
        new HappyPack({
            id: 'js',
            loaders: ['babel-loader?cacheDirectory'],
            threads: 4
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['happypack/loader?id=js'],
                include: [
                    path.resolve(__dirname, "src"),
                ],
                plugins: ['transform-runtime'],
                exclude: 'node_modules'
            },
            /* {
                 test: /\.jsx$/,
                 loaders: ['happypack/loaders?id=jsx'],
                 include: [
                   path.resolve(__dirname, "src"),
                 ],
                 plugins: ['transform-runtime'],
                 exclude: /node_modules/
             },*/
            {
                test:   /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            },
            {
                test:   /\.png$/,
                loader: "file-loader"
            },
            {test: /\.json$/, loader: 'json'}
        ]
    },
    postcss: function () {
        return [autoprefixer, precss];
    }
}
