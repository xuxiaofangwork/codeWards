const http = require('http');

/*
****************************************************************
// options参数示例;
let options = {
    code: '200', // 需要返回的自定义状态码;
    body: '这是参数demo', // 需要返回的自定义响应数据;
    head: {"content-type": "text/html;charset=utf8"} // 需要返回的自定义响应头;
};
***************************************************************/
/**
 * @description: 此函数用于设置http响应信息;
 * @param {Object} res: response类;
 * @param {any} options: 自定义响应数据, 详见上面options配置示例;
 * @returns 无返回信息;
 */
function response(res, options){
    // 声明变量，缓存http状态信息;
    const info = http.STATUS_CODES;
    let code = options.code || 404;
    // 声明变量，储存默认返回信息;
    let dftBody = '<hr/>'
        + '<h1 style="color:red;">'
        + code
        + '</h1>'
        + '<p style="color:red;">'
        + info[code]
        + '</p>'
        + '<hr/>';
    let body = options.body || dftBody;
    // 声明变量, 储存默认设置的响应头;
    let dftHead = {
        "Content-Type": "text/html; charset=utf-8",
        // "Content-Encoding": "gzip",
        "Access-Control-Allow-Origin": "xiaodan.server",
        "X-Ua-Compatible": "IE=Edge,chrome=1",
        "Cache-control": "private"
    };
    let head = Object.assign(dftHead, options.head);

    res.writeHead(code, head);
    res.write(body);
    res.end();
}

module.exports = response;
