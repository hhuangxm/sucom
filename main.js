var http = require("http");
http.createServer(function(request, response) {
	response.writeHead(200, {
		"Content-Type" : "text/plain" // �������
	});
	response.write("Welcom to sucomnetwork.com");// ҳ�����
	response.end();
}).listen(80); // �����˿ں�
console.log("nodejs start listen 80 port!");