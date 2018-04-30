// 请求url的路径（pathname）第一个目录为请求资源类型, 通过资源类型区分请求类型, static: 静态资源, inter: 接口请求, img: 库储存图片;
// 请求url的路径（pathname）第二个目录为路由表名称, 通过路由表名称查询资源地址;
// 请求url的路径（pathname）最后一个目录（文件名或路径）为路由表key值, 通过路由表key值查询是否有开放或存在相关资源和接口;

// 引入全局对象url, 统一采用WHATWG API解析url;
const URL = require('url').URL;
const path = require('path');
// 引入全局对象querystring, 用来解析查询参数;
const querystring = require('querystring');



/**
 * @description: 解析请求中的url, 将解析结果返回;
 * @param  {String} url: 请求url;
 * @return {Object} 详见返回对象注释;
 */
function parseURL(url){
    // URL对象的实例;
    let Ourl = new URL(url);
    // 声明变量储存pathname, 方便后面调用;
    let pathName = path.normalize(Ourl.pathname);
    // 将路径以‘/’为你分界点就行分割;
    let parsedPath = pathName.slice(1).split('/');
    // 声明变量，储存路由表名称, 默认为null;
    let route = null;
    // 声明变量，储存请求类型;
    let type = null;
    // 声明变量，储存路由地址的键值；
    let key = null;

    if(pathName === '/'){
    	type = 'index';
        route = 'index';
        key = 'index';
    }else{
        type = parsedPath[0];
    	route = parsedPath[1];
        key = parsedPath[parsedPath.length - 1];
    }

    return {
        type: type,   // 请求的资源类型;
    	route: route,	// 服务器返回数据所在的路由表名称;
        key: key,
    	pathName: pathName,		// 解析后的pathname;
    	query: querystring.parse(Ourl.search.slice(1)),	// 解析过的查询参数
    };
}

module.exports = parseURL;
