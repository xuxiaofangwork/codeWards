
/**
 * @description: 此方法用于验证客户端请求方法是否正确；
 * @param  {Object} res: response类;
 * @param  {String} method: 当前请求的请求方法;
 * @param  {String} allow: 当前请求允许的请求方法;
 * @return {Boolean} 返回请求是否通过，通过返回true，失败返回false;
 */
function checkMehod(res, method, allow) {
    // 声明变量, 储存返回值, 默认检查通过;
    let is = true;
    // 声明变量储存检查不通过时返回的信息;
    let body = '<h1 style="color:red;">405</h1>'
        + '<p style="color:red;">请求方法错误，请使用'
        + allow
        + '方法发出请求</p>';

    if (method.toLowerCase() != allow) {
        // 检查失败，改变返回值;
        is = false;
        res.writeHeader(405, {
            "Content-Type": "text/html; charset=utf-8",
            "Access-Control-Allow-Origin": "xiaodan.server",
            "Access-Control-Allow-Method": allow
        });
        res.write(body);
        res.end();
    }

    return is;
}

module.exports = checkMehod;
