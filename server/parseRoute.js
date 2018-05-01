const path = require('path');
// 声明变量缓存所有路由;
const router = require(__dirname + '/router.js');


/**
 * @description: 根据传入的路由参数，解析出路由地址;
 * @param {Object} opt: parseURL解析出的路由参数;
 * @returns {Object} 返回解析得到的路由地址和资源请求信息;
 */
function parseRoute(opt) {
    // 声明常量， 储存路由文件夹的绝对地址;
    // const adr = path.resolve('./route');
    // 资源类型
    let optType = opt.type;
    // 资源所在路由表名称
    let optRoute = opt.route;
    // 资源所在路由表键值
    let optKey = opt.key;

    // 检测请求类型是否存在；
    if (router.type.indexOf(optType) === -1) return 404;
    // 检查请求路由表是否存在;
    if (!router[optType].hasOwnProperty(optRoute)) return 404;
    // 检查请求表中是否存在此资源;
    if (!router[optType][optRoute].hasOwnProperty(optKey)) return 404;
    // 检测通过返回资源路由地址;
    return router[optType][optRoute][optKey];
}

module.exports = parseRoute;
