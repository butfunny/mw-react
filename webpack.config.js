var path = require("path");
var config = {

    entry: ["./src/app.tsx"],
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },

    resolve: {
        extensions: ["", ".ts", ".tsx", ".js"]
    },

    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        hot: true,
        inline: true,
        port: "3000",
        host: "localhost"
    }
};

module.exports = config;