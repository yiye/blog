var koa = require('koa');
var app = koa();

app.use(function *(){
    this.body = '<html><body><img src="https://img.alicdn.com/imgextra/i4/751054539/TB2MMN6fFXXXXXdXpXXXXXXXXXX_!!751054539.jpg" alt="" /></body></html>';

});

app.listen(80);
