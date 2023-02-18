const path =require('path');
// const  HtmlWebpackPlugin = require('html-webpack-pluggin');

module.exports={
    mode:'development',
    entry:{
        index:'./src/index.js'
    },
    devtool:'inline-source-map',
    // pluggins:[
    //     new  HtmlWebpackPlugin({
    //         title:'resturant'
    //     }),

    // ],
    output:{
        filename:'main.js',
        path: path.resolve(__dirname,'dist'),
        
    },
};
