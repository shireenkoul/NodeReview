var server=require('./server');
var router=require('./router');
var handler=require('./handler');
var handle={};
handle["/"]=handler.home;
handle["/home"]=handler.home;
handle["/review"]=handler.review;
server.servermodule(router.route,handle);