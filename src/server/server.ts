import * as koa from 'koa';
import * as serve from 'koa-static';
import * as webpack from 'webpack';
import * as config from '../../webpack.config.js';
import * as devMiddleware from 'koa-webpack-dev-middleware';
import * as hotMiddleware from 'koa-webpack-hot-middleware';


const app = new koa();

const compiler: object = webpack(config);

app.use(devMiddleware(compiler, {
    stats: {
        colors: true
    },
    publicPath: config.output.publicPath
}));

app.use(hotMiddleware(compiler));

app.use(serve('dist'));

app.listen(8080);
