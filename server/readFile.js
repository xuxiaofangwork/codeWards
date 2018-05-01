


const fs = require('fs');
/**
 * @description: 此方法根据路由信息中的地址读取返回内容;
 * @param {String} routePath: 路由信息中的路由地址;
 * @returns 返回一个promise对象;
 */
function read(routePath) {
    return new Promise(function (ok, fail) {
        fs.readFile(routePath, 'utf8', function (err, content) {
            if (err) {
                fail(err);
            } else {
                ok(content);
            }
        });
    });
}

module.exports = read;
