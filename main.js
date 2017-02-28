var http = require("http");
http.createServer(function(request, response) {
	response.writeHead(200, {
		"Content-Type" : "text/plain" // 输出类型
	});
	response.write("Welcom to sucomnetwork.com");// 页面输出
	response.end();
}).listen(80); // 监听端口号
console.log("nodejs start listen 80 port!");