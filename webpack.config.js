 const path = require('path')
 const VueLoaderPlugin = require('vue-loader/lib/plugin')
 module.exports = {
   mode: "development",
   entry: path.resolve(__dirname, './src/lib/index.js'),
   output: {
     path: path.join(__dirname, './dist'),
     filename: "vue-toast-lp.js",
     libraryTarget: 'umd',
     library: 'VueToasetDemo'
   },
   plugins: [
     new VueLoaderPlugin(),
   ],
   module: {
     rules: [{
         test: /\.js$/i,
         include: path.join(__dirname, 'src'),
         exclude: /node_modules/,
         use: {
           loader: 'babel-loader',
           options: {
             presets: ['@babel/preset-env']
           }
         }
       },
       {
         test: /\.vue$/i,
         include: path.join(__dirname, './src'),
         exclude: /node_modules/,
         loader: 'vue-loader',
         options: {
           loaders: {
             scss: 'style-loader!css-loader!sass-loader',
             sass: 'style-loader!css-loader!sass-loader'
           }
         }
       },
       {
         test: /\.(scss|sass)$/i,
         use: ['style-loader', 'css-loader', 'sass-loader']
       }, {
         test: /\.css$/i,
         use: ['style-loader', 'css-loader']
       }
     ]
   }
 }