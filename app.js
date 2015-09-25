var koa = require('koa');
var app = koa();

app.use(function *(){
    this.body = "hello xiaoxin";
});

app.listen(80);
