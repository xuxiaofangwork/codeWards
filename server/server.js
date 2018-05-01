/**
 * @name: server.js
 * @description: 开启项目服务, 项目中的唯一服务器;
 * @requires: 见代码中加载项;
 * @author: WangMingyang;
 */

// 引入全局对象fs;
const fs = require('fs');
// 引入全局对象http;
const http = require('http');
// 引入全局对象url, 所有url解析统一使用WAHTWG标准;
const URL = require('url').URL;
// 引入全局对象querystring(查询参数解析模块);
const query = require('querystring');
// 引入请求参数解析方法;
const parseURL = require('../server/parseURL.js');
// 引入解析路由的方法;
const parseRoute = require('../server/parseRoute.js');
// 引入读取文件方法;
const read = require('../server/readFile.js');
// 引入请求方式检查方法;
const checkMethod = require('../server/checkMethod.js');
// 引入设置http请求响应信息;
const response = require('../server/response.js');
// 创建服务器实例;
const server = new http.Server();
// 声明服务器域名;
const hostname = 'xiaodan.server';
// 声明服务器端口号;
const port = 10010;



// 设置服务器请求监听;
server.on('request', function (req, res) {
    // 解析请求的url;
    let url = new URL(req.url, 'http://' + hostname);
    // 将请求url解析成路由参数;
    let routeParams = parseURL(url);
    // 根据路由参数，查询出路由信息;
    let routeInfo = parseRoute(routeParams);
    console.log(routeParams);
    // 如果路由信息不存在，返回404信息;
    if (routeInfo === 404) return response(res, {code: 404});
    // 检查请求方式是否正确;
    let isAllow = checkMethod(res, req.method, routeInfo.method);
    if (isAllow) {
        // 读取响应数据;
        read(routeInfo.adr).then(
            function(ok){
                response(res, {
                    code: 200,
                    body: ok,
                    head: routeInfo.head
                });
            },
            function(fail){
                response(res, {code: 500});
            }
        ).catch(function(err){
            response(res, {code: 500});
        });
    }
});

// 启动服务器;
server.listen(port, hostname);
