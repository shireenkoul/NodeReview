var http=require('http');
var url= require('url');

function servermodule(route,handle)
{
function onRequest(request,response){
	var pathname=url.parse(request.url).pathname;
	route(pathname,handle, response); 
	console.log("Request received for "+pathname);
	/*response.writeHead(200,{"content-type":"text/Plain"});
	response.write("Hello from our module");
	response.end();	*/
}
http.createServer(onRequest).listen(8888);
	console.log("Server started on port 8888");
}

exports.servermodule=servermodule;