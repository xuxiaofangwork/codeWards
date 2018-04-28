/**
 * @name: url.js
 * @description: 负责所有http请求的url解析;
 * @requires: url模块;
 * @author: WangMingyang;
 */

// 引入全局对象url, 统一采用WHATWG API解析url;
const URL = require('url').URL;

function parseURL(url){
    let parsed = new URL(url);
    return parsed;
}

