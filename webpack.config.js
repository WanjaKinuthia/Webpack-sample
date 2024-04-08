const path = require('path');
const webpack  = require('webpack');
module.exports = {
  // Entry point for your application
  entry: './index.js',
  devServer:{
    hot:true,
    port:9000,
  },
  module: {
    rules: [
        // rule loader for css
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    //   image processing
      {
        test: /\.(png|jpe?g|gif|svg)$/, // Matches image extensions
        use: 'file-loader', // Use file-loader for image processing
      },
    ],
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),

  ],

  // Output configuration
  output: {
    filename: 'bundle.js', // Name of the generated bundle
    path: path.resolve(__dirname, 'dist'), // Output directory for the bundle
  },
  mode:"development"
};