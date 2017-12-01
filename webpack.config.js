//设置绝对路径
const path = require('path');

const webpack = require('webpack');


const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin(
    'css/[name].style.css'
);


//html插件 会对应生成html页面
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  //运行环境的上下文，值为运行文件的根目录路径path.join(__dirname)以当前环境为绝对路径起点
  context: path.join(__dirname),
  //文件打包入口--/app/index.js //传入字符串或数组为单入口 ，对象为多入口
  entry: {
    main:path.join(__dirname, 'index.js')/*,
    b:path.join(__dirname,'script/b.js')*/
  },
  //文件出口
  output: {
    //文件打包后输出路径           //生成文件在dist目录下
    path: path.join(__dirname, 'dist'),
    //文件打包后名称 [name]是entry对象的属性名 [hash]每次是打包时的hash值 [chunkhash]是打包文件后hash值，只有文件有修改打包后才会改变
              //生成的js在js下
    filename: "js/[name]-[hash].js"
    //publicPath:'http://www.baidu.com' //打包后js文件引用的地址开头设置
  }, // js/nav.js
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules')
    ],
    alias: {

      //    别名（resolve.alias） 是 Webpack 的一个配置项，它的作用是把用户的一个请求重定向到另一个路径，例如通过修改 webpack.config.js配置文件，加入：
      js: path.join(__dirname, 'src', 'js'),
      scss: path.join(__dirname, 'src', 'scss'),
      img: path.join(__dirname,  'img'),
      fonts: path.join(__dirname,  'src','scss','fonts')
    },
    //src/xx.js 直接简写xx 使引入模块是可不带扩展名称
    extensions: ['.js', '.scss','.css']
  },
  module: {
    rules: [
      {
        //匹配js文件
        test: /\.js$/,
        //使用的loader
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['es2015'],
              ['react']
            ]
          }
        }
      },{
        test:/\.(jpg|png)$/,
        loader:'file-loader',
        options:{
          name:'images/[name].[ext]'
        }
      },{
        test: /\.(ttf|woff|eot|svg|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]'
            }
          }
        ]
      }, {
        test: /\.(scss|css)$/,
          use: [
            {loader:'style-loader'},
            {
              loader: 'css-loader',
              options: {
                minimize: true
              }
            },{
              loader:'resolve-url-loader'
            },
            {
              loader: 'sass-loader?sourceMap'
            }
          ]
      }
    ]
  },
  //html  不需要引入js，css文件插件
  //引入插件后初始化插件
  plugins: [
    new HtmlWebpackPlugin({
      //模板路径
      filename: 'index.html',
      template: 'index.html',
      trunks:['main']
      /*上线时压缩文件
      minify:{
          //删除注释
         removeComment:true,
         //删除空格
         removeWhitespace:true
       }
      */
    })/*,
    new HtmlWebpackPlugin({
      filename: 'productDoc.html',
      template: 'productDoc.html',
      trunks:['b']
    })*///,
    //extractSass
  ]
};