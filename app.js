const http = require('http');
const app = http.createServer();
const path = require('path');
const serveStatic = require('serve-static');
const dateFormat = require('dateformat');

const template = require('art-template');
// 模板配置
template.defaults.root = path.join(__dirname, 'views');
template.defaults.imports.dateFormat = dateFormat;
template.defaults.extname = '.art';

require('./model/connect');

// 1. 路由和静态资源托管
const router = require('./route/index');
const serve = serveStatic(path.join(__dirname, 'public'));

app.on('request', (req, res) => {
    // 2. 启动路由和静态资源托管
    router(req, res, () => {});
    serve(req, res, () => {});
});

app.listen(3000);
console.log('服务启动成功');
