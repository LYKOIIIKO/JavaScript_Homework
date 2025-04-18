const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	mode: 'development', //development || production
	//entry: path.resolve(__dirname, 'src', 'index.js') //по-хорошему
	entry: path.resolve(__dirname, 'scripts', 'index.js'),
	output: {
		path: path.resolve(__dirname, 'production'),
		filename: '[name].[contenthash].js'
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.jsx'] //расширения файлов по умолчанию. при экспорте можно будет расширения не указывать т.к. они уже прописаны здесь
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.resolve(__dirname, 'index.html')
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css'
		})
	],
	devServer: { //настраиваем лайв сервер
		port: 5400 //от 3000 до 65535
	},
	module: {
		rules:[
			{
				test: /.(c|sa|sc)ss$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] //важен порядок, работают справа на лево
			},
			{
				test: /\.tsx?$/i,
				use: 'ts-loader'
			}
		]
	}

}