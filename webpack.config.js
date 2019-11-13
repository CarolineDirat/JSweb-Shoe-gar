const path = require('path');

module.exports = {
  mode: "development",
  entry: {
    polyfill: "babel-polyfill", 
    blog: "./src/blog.js",
    app: "./src/functions.js"
  },
  devServer: {
    contentBase: './dist',
  },
  output: {
    filename: "[name].bundle.js", 
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',  
    	  {
      	    loader: 'image-webpack-loader',
      	    options: {
        	  disable: true, // webpack@2.x and newer
      	    },
    	  },
        ],
      },
    ]
  }
};
