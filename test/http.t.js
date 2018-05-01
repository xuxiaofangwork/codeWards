// 引入全局对象http;
const http = require('http');
const query = require('querystring');
const fs = require('fs');
const URL = require('url').URL;
const parseURL = require('../server/parseURL.js');
const parseRoute = require('../server/parseRoute.js');
const read = require('../server/readFile.js');
const checkMethod = require('../server/checkMethod.js');
const setHead = require('../server/setHead.js');
const response = require('../server/response.js');
// 声明服务器域名;
const hostname = 'xiaodan.server';
// 声明服务器端口号;
const port = 10010;
// 创建服务器实例;
const server = new http.Server();


// 启动服务器;
server.listen(port, hostname);
// 设置服务器请求监听;
server.on('request', function (req, res) {
    // 解析请求的url;
    let url = new URL(req.url, 'http://' + hostname);
    // let method = req.method;
    // let rheader = req.headers;
    // let code = 200;
    // let routeOpt = parseURL(url);
    // let routePath = parseRoute(routeOpt);
    // let isok = checkMethod(response, req.method, 'get');
    // if (isok) {
    //     setHead(response, 200, {'x-fuck': 'bitch'});
    //     response.write('123');
    //     response.end();
    // }
    response(res, {});











    // read(routePath).then(
    // 	function(content){
    //   response.writeHead(code, {
    //   	'Content-Type': 'text/html',
    //   	'Access-Control-Allow-Methods': 'post'
    //   });
    //  	response.write(content);
    //  	response.end();
    // 	},
    // 	function(fail){
    //   response.writeHead(404, {'Content-Type': 'text/html'});
    //  	response.write(JSON.stringify(fail));
    //  	response.end();
    // 	}
    // ).catch(function(err){
    //  response.writeHead(500, {'Content-Type': 'text/html'});
    // 	response.write(err);
    // 	response.end();
    // });
});

// var u = new URL('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash');

// console.log(u.searchParams.get);
// console.log(http.STATUS_CODES);

// http.createServer(function (request, response) {
//     response.writeHead(200, { 'Content-Type': 'text/plain' });
//     response.write("Hello World");
//     response.end();
//     JSON.stringify(console.log(request));
// }).listen(8088, '127.0.0.1');
// console.log('Server running on port 8088.');



// var data = {
//     // "hostname"
//     host: "127.0.0.1",
//     port: "10085",
//     path: "/Radio/resource/cloud/bulk/gettoken",
//     method: "get"
// };

// http.request(data, function(res){
//     console.log(res.statusCode);
// });
