import koa  from 'koa';
import path from 'path';
import koaStatic  from 'koa-static';
var router = require('koa-router')();
import bodyParser from 'koa-body';
import {routes} from './routes';

var app = koa();
const PORT = 3000;
const rootPath = path.normalize(__dirname + '/../client');
console.log(rootPath);

routes(app, router);
app.use(bodyParser({multipart: true}));
app.use(router.routes());
app.use(koaStatic(rootPath));

app.listen(PORT, function () {
  console.log(`Running in:\nhttp://localhost:${PORT}`);
});
