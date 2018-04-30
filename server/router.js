/**
 * @description: 将所有路由表统一输出， 缓存到内存中， 使路由可以快速查询；
 * @required: 所有注册的路由表;
 * @date: 2018-04-30;
 * @author: WangMingyang;
 */

const path = require('path');
// 声明变量储存路由文件夹地址
const routePath = path.resolve(__dirname + '/route');
// 声明变量储存路由文件夹下的index文件夹地址
const indexPath = path.resolve(routePath + '/index/');
// 引入index路由表
const index = require(indexPath + '/index');

module.exports = {
	// 所有路由类型;
	type: [
		'static',
		'img',
		'interface',
		'index'
	],
	// 项目静态资源类型路由
	static: {},
	// 储存到数据库中的图片类型路由
	img: {},
	//  接口类型路由
	interface: {},
	// 索引页地址;
	index: {
		index: index
	}
}