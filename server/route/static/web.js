const path = require('path');

module.exports = {
    'bg1': {
        adr: path.resolve(__dirname, "../../../web/bg1.jpg"),
        method: 'get',
        head: {
            'Content-Type': 'image/jpeg'
        }
    },
    'base': {
        adr: path.resolve(__dirname, "../../../web/base.css"),
        method: 'get',
        head: {
            'Content-Type': 'text/css; charset=utf-8'
        }
    }
};