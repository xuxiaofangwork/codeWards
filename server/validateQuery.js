/**
 * @description: 此方法用于验证接口请求的参数;
 * @param {Object} query: 请求接口传过来的参数;
 * @param {Object} config: 验证配置项, 详见底部config配置示例;
 */
function validate(query, config) {
    // 参数验证状态, 默认为通过;
    let status = {
        ok: true, // 验证失败时, 此值变为false;
        msg: '参数校验通过' // 验证失败时, 此值变为提示信息;
    };
    // 请求参数的所有键值;
    let keys = Object.keys(query);
    // 查询请求参数中是否存在多余参数, 不存在返回undefined, 存在返回key值;
    let troppo = keys.find(function (el) {
        return config.hasOwnProperty(el) == false;
    });

    if (troppo) { // 存在多余参数, 直接返回验证失败;
        status.ok = false;
        status.msg = '存在多余参数';
        return status;
    }

    /**
     * @description: 此方法是验证参数具体操作;
     * @param {String} key: 验证参数的键值;
     * @return {Boolean, String} 返回俩种值: 验证通过返回true, 验证失败返回失败的提示信息;
     */
    let is = function (key) {
        // 参数是否为必传项;
        let isRequire = config[key].require;
        // 参数的类型;
        let type = config[key].type;
        // 参数是否需要为某一固定值;
        let value = config[key].value;
        // 参数的最大长度;
        let length = config[key].length;
        // 参数校验错误的提示信息;
        let msg = config[key].msg;
        // 被检测的请求值;
        let queryKey = query[key];

        // 考虑到0和false的存在, 不用!queryKey;
        if (isRequire && (queryKey === null || queryKey === undefined || queryKey === '')) return msg.require;
        if (query.hasOwnProperty(key)) {
            if (type != typeof queryKey) return msg.type;
            if (typeof queryKey == 'string' && queryKey.length > length) return msg.length;
            if (value !== '' && value !== null && value !== undefined && value !== queryKey) return msg.value;
        }
        return true;
    };

    // 遍历监测所有参数;
    for (let key in config) {
        if (query.hasOwnProperty(key)) {
            let ok = is(key);
            if (typeof ok == 'string') {
                status.ok = false;
                status.msg = ok;
                return status;
            }
        }
    }

    return status;
}

export default validate;

/* config配置示例;
var config = {
    a: {
        value: null, // 需要传入的参数值, 不需要某固定值默认为null;
        require: false, // 参数是否为必传, 非必传为false, 必传为true;
        type: 'string', // 需要传入的参数类型
        length: 50, // 需要传入的参数长度限制, 不限制长度默认为null;
        msg: { // 验证错误时的反馈信息
            value: '', // 验证参数值得错误信息;
            require: '', // 验证是否为必传的错误信息;
            type: '', //验证类型错误时的错误信息;
            length: '' // 验证数据长度时的错误信息;
        }
    }
}
*/
