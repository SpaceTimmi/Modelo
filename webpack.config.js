const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Entry point for your React app
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory for bundled files
    filename: 'bundle.js', // Name of the bundled file
  },
  mode: 'development', // Change to 'production' for production builds
  devServer: {
    static: path.join(__dirname, 'dist'), // Serve content from dist folder
    port: 3000, // Development server port
    open: true, // Automatically open browser
    hot: true, // Enable hot module replacement
  },
  module: {
    rules: [
      {
        test: /\.js$|jsx/, // Match JS and JSX files
        exclude: /node_modules/, // Exclude node_modules from Babel processing
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/, // Match CSS files
        use: [
          'style-loader', // Inject CSS into the DOM
          'css-loader',   // Enable @import and url() like import/require() and resolve them
          'postcss-loader', // Process CSS with PostCSS and Tailwind CSS
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Use this HTML file as a template
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'], // Allow importing JS and JSX files without specifying extensions
  },
};

