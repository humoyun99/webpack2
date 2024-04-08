const path=require('path')//node js
module.exports={
    mode:'devilopment',
    //mode
    entry: path.relative(__dirname,'./src/app.js'),
    // entry
    output:{
        path:path.resolve(__dirname,'.public'),
        filename:'bundle.js'
    },
    // plaugins
    // loaders


module:{
    rules:[
        {
            test:/\.css$/i,
            use:['style-loader','css-loader'],
        },
    ],

},
}