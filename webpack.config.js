var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");
module.exports = {
	entry:{
		build:"./react/index.js"
	},
	output:{
		path:"./react_build/",
		filename:"[name].js"
	},
	module:{
		loaders:[
			{
				test:/.css$/,
				loaders:["style","css"],
				 exclude:"/node_modules/"
			},
			{
				test:/.js?$/,
				loaders:['react-hot','babel?presets[]=es2015&presets[]=react'],
				// loaders:'react-hot!babel',
				exclude:"/node_modules/",
				include:path.resolve(__dirname,"react")
			}
		]
	},
	devServer:{

	},
	resolve:{
		extensions:['','.js',".css",'jsx']  //自动补全识别后缀
	},
	plugins:[
		new htmlWebpackPlugin({
			title:"欢迎",
			chunks:["build"]
		})
	]
}
