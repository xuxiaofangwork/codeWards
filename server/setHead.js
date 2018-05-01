
/**
 * @description: 此方法用于设置http请求的响应头;
 * @param {Object} res: response类;
 * @param {Number} res: 响应状态码;
 * @param {Object} addTo: 相应资源的自定义追加相应头;
 */
function setHead(res, code, addTo) {
    // 声明变量, 储存默认设置的响应头;
    let dft = {
        "Content-Type": "text/html; charset=utf-8",
        // "Content-Encoding": "gzip",
        "Access-Control-Allow-Origin": "xiaodan.server",
        "X-Ua-Compatible": "IE=Edge,chrome=1",
        "Cache-control": "private"
    };

    // 设置响应header;
    res.writeHeader(code, Object.assign(dft, addTo));
}

module.exports = setHead;
