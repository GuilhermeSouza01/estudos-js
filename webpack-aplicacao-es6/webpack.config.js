module.exports = {
    entry: './src/main.js',
    watchOptions: {
        ignored: "/node_modules/",
        poll: 1000, // Check for changes every second
      },
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js',
    },
    devServer: {
        static: __dirname + '/public'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }    
            }
        ],
    },
};