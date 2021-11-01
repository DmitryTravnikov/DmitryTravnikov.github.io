const path = require('path')

module.exports = {
	entry: './app/js/common.js',
	output: {
		path: path.resolve(__dirname, 'dist/js'),
		publicPath: '/',
		filename: 'bundle.js',
		// filename: '[name].js',
		// chunkFilename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	},
	externals: {
		jquery: 'jQuery'
	},
	devtool: 'source-map'
}