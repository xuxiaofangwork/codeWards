


const fs = require('fs');

function read(routePath){
	return new Promise(function(ok, fail){
		fs.readFile(routePath, 'utf8', function(err, content){
			if(err){
				fail(err);
			}else{
				ok(content);
			}
		});
	});
}

module.exports = read;
