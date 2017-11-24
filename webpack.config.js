var path = require('path');


module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'babel-polyfill',
        __dirname + '/src/index'
    ],
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                loaders: ['react-hot', 'babel-loader'],
                include: [
                    path.resolve(__dirname, 'src')
                ],
                test: /\.js$/,
                plugins: ['transform-runtime']
            },
            {
                test:   /\.css$/,
                loader: 'style-loader!css-loader!postcss-loader'
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            },
            {
                test:   /\.png$/,
                loader: 'file-loader'
            },
            {test: /\.json$/, loader: 'json'}
        ]
    }
};
