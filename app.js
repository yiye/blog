var koa = require('koa');
var app = koa();

app.use(function *(){
    this.body = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>小馨</title></head><body><style type="text/css">html,body,img{width: 100%;}</style><img src="https://img.alicdn.com/imgextra/i4/751054539/TB2_np.fFXXXXbYXXXXXXXXXXXX_!!751054539.jpg" alt="" /></body></html>';

});

app.listen(80);
