const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:"./src/index.js",
    devtool: 'source-map',
    output:{
        filename:"bundle-prod.js",
        path:path.resolve(__dirname,'prod')
    },
    module: {
        rules: [
          {
            test: /\.html$/,
            use: 'html-loader',
          },
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
            type: 'asset/resource',
          },
        ],
      },
    devServer:{
        hot: true,
        port:8080

    },
    plugins: [
        // спросить у преподавтеля как описать цикл, чтобы пройтись по всем html файлам в папке
        new HtmlWebpackPlugin({
            template:path.join(__dirname, 'index.html'),
            filename:"index.html"
        }),
        new HtmlWebpackPlugin({
            template:path.join(__dirname, 'feedback.html'),
            filename:"feedback.html"
        }),
        new HtmlWebpackPlugin({
            template:path.join(__dirname, 'list_of_entries.html'),
            filename:"list_of_entries.html"
        }),
        new HtmlWebpackPlugin({
            template:path.join(__dirname, 'recording_page.html'),
            filename:"recording_page.html"
        })
    ]
}