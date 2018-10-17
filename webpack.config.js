const path = require("path")

const htmlWebpackPlugin = require("html-webpack-plugin")

const VueLoaderPlugin = require("vue-loader/lib/plugin")

module.exports = {
	plugins: [
		new htmlWebpackPlugin({
			template: path.join(__dirname, "src/index.html"),
			filename: "index.html"
		}),
		new VueLoaderPlugin()
	],
	module: {
		rules: [
			{ test: /\.vue$/, use: "vue-loader" },
			{ test: /\.css$/, use: ["style-loader", "css-loader"] },
			{ test: /\.(jpg|png|gif|bmp|jpeg)$/, use: "url-loader" },
			{ test: /\.(ttf|eot|svg|woff|woff2)$/, use: "url-loader" },
			{ test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
		]
	},
}