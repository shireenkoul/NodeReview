function route(pathname, handle, response)
{
	console.log("request for "+pathname);
	if(typeof handle[pathname] ===  'function')
	{
		handle[pathname](response);
	}
	else
	{
		console.log("No handler for this pathname"+pathname); 
		response.writeHead(404,{"Content-Type":"text/plain"});
		response.write("Error 404 page not found");
		response.end();
	}
}
exports.route=route;