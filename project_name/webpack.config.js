var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;//内置插件

// var ROOT_PATH = path.resolve(__dirname);
// var DISC_PATH = path.resolve(ROOT_PATH, 'disc');
// var SRC_PATH = path.resolve(ROOT_PATH, 'src');



module.exports = {
//   var entries = (function() {
//     var jsDir = path.resolve(srcDir, '**')
//     var entryFiles = glob.sync(jsDir + '/*.{js,jsx}')
//     var map = {}
//     entryFiles.forEach((filePath) => {
//         var filename = filePath.substring(filePath.lastIndexOf('views') + 6, filePath.lastIndexOf('.'))
//         map[filename] = filePath
//     })
//     return map
// }())
  entry: {
    bundle: './src/js/index.js',
    build: "./src/js/demo2.jsx",
    demo3:'./src/js/demo3.js',
    demo4:'./src/js/demo4.js',
    demo5:'./src/js/demo5.js',
    demo6:'./src/js/demo6.js'
  },
  output: {
    path: __dirname+'/dist',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        // loader: 'style!css'
        loaders: ['style', 'css']
      },

      {
        test: /\.js/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-3'],
          compact: false
        },
        include: __dirname
      },

      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015','stage-3','react']
        }
      },

      { 
        test: /\.(png|jpg|jpeg)$/, 
        loader: 'url-loader?limit=8192'
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
  },
  plugins: [
    //压缩插件
    // new uglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // }),
    
    // new webpack.ProvidePlugin({
    //   $: "jquery",
    //   jQuery: "jquery",
    //   "window.jQuery": "jquery"
    // }),
    //注释插件
    new webpack.BannerPlugin('This file is created by bhz')

    
  ]
}