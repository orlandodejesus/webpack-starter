const HtmlWebPackPlugin     = require('html-webpack-plugin');
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyPLugin            = require('copy-webpack-plugin');


module.exports = {
    mode: "development",
    optimization: {
      minimizer: [ new OptimizeCssAssetsPlugin() ]
    },
    module: {
        rules: [
            {
             test:/\.css$/,
             exclude: /styles\.css$/,
             use : [
                    'style-loader',
                    'css-loader'
                  ]             
            },
            {
                test:/styles\.css$/,
                use : [
                       MiniCssExtractPlugin.loader,
                       'css-loader'
                     ]      
            },
            {
             test: /\.html$/i,
             use:[
                 {
                    loader: 'html-loader',
                    options : { minimize: false , sources: false,}
                 }
             ]
                          
            },
            {
                test: /\.(png|jpg|svg|gif)$/i,
                use : [
                    {
                        loader:'file-loader',
                        options: {
                            esModule:false,
                            name: 'assets/[name].[ext]'
                        }
                    }
                ]  
            },
            
        ]

    },
    plugins:[
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'

        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: false
        }),
        new CopyPLugin ({
            patterns: [  
            { from: 'src/assets' , to: 'assets/'},
        ],})
       
    ],




};