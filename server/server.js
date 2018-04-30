/**
 * @name: server.js
 * @description: 开启项目服务, 项目中的唯一服务器;
 * @requires: url.js;
 * @author: WangMingyang;
 */



// 引入全局对象http;
const http = require('http');
// 创建服务器实例;
const server = new http.Server();
// 声明服务器域名;
const hostname = 'xiaodan.server';
// 声明服务器端口号;
const port = 10010;



// 设置服务器请求监听;
server.on('request', function (request, response) {
    // 解析请求的url;
    let url = new URL(request.url, 'http://' + hostname);
});

// 启动服务器;
server.listen(port, hostname);
