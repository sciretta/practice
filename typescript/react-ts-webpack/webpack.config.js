const path = require('path')

module.exports = {
	target: 'web',
	mode:'development',
  entry: ['@babel/polyfill', './src/index.tsx'],
	// entry:'./src/index.tsx',
	output:{
		path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
	},
	module:{
		rules: [
      {
        test: /\.tsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-react',
              '@babel/preset-env',
              '@babel/preset-typescript'
            ]
          }
        }
      },
    ]
	},
	resolve:{extensions: ['.ts','.tsx','.js']},
	devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 4000
  }
}