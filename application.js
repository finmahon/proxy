var express=require("express");
var app=express();
var proxy=require("express-http-proxy");
var proxyTable=require("./proxyTable");
var handler=require("./handler");

app.get('/*',function(req,res,next) {
  console.log('get url: '+req.url)
  next();
});

app.post('/*',function(req,res,next) {
  console.log('post url: '+req.url)
  console.log('post body: '+req.body)
  next();
});


for (var path in proxyTable){
  var cfg=proxyTable[path];
  console.log("Proxy: ",path," ",cfg.name);
  app.use(path,handler(cfg));
}



app.listen(process.OPENSHIFT_NODEJS_PORT || 8080,function(){
  console.log("Server started successfully");
})