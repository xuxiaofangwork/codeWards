// 引入全局对象http;
const http = require('http');
const query = require('querystring');
const URL = require('url').URL;
// 声明服务器域名;
const hostname = '192.168.3.57';
// 声明服务器端口号;
const port = 10010;
// 创建服务器实例;
const server = new http.Server();


// 启动服务器;
server.listen(port, hostname);
// 设置服务器请求监听;
server.on('request', function(request, response){
    // 解析请求的url;
    let url = new URL(request.url, 'http://' + hostname);
    if (url.pathname == '/'){
        console.log(url.host);
        console.log(url);
        console.log(query.parse(url.search.slice(1)));
    }
    console.log(request.method);
});

var u = new URL('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash');

console.log(u.searchParams.get);
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
