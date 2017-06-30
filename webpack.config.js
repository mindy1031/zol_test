var webpack=require("webpack");
module.exports = {
	entry:"./js/main.js",
    //入口文件输出配置
    output: {
        path:__dirname+"/public",
        filename: "bundle.js"
    },

}
//module.exports = {
//	entry:"./js/detailRequire.js",
//  //入口文件输出配置
//  output: {
//      path:__dirname+"/public",
//      filename: "detail.js"
//  },
//
//}
module.exports = {
	entry:"./js/listRequire.js",
    //入口文件输出配置
    output: {
        path:__dirname+"/public",
        filename: "list.js"
    },

}
//module.exports = {
//	entry:"./js/loginRequire.js",
//  //入口文件输出配置
//  output: {
//      path:__dirname+"/public",
//      filename: "login.js"
//  },
//
//}
//module.exports = {
//	entry:"./js/regRequire.js",
//  //入口文件输出配置
//  output: {
//      path:__dirname+"/public",
//      filename: "reg.js"
//  },
//
//}