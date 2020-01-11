const path = require('path');

const config = {
	entry: {
		serendipity: './serendipity.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	target: 'web',
	output: {
		filename: 'serendipity.min.js',
		library: 'serendipity',
		libraryTarget: 'umd'
	},
	devtool: 'source-map',
	mode: 'production',
	resolve: {
		modules: [
			path.resolve(__dirname, 'src'),
			'node_modules'
		],
		extensions: ['.ts', '.js', '.json']
	}
};

const devConfig = {
	...config,
	output: {
		filename: 'serendipity.js',
		library: 'serendipity',
		libraryTarget: 'umd'
	},
	mode: 'development'
};

module.exports = [config, devConfig];
