import koa from 'koa';
import serve from 'koa-static';
import webpack from 'webpack';
import config from '../../webpack.config.js';
import devMiddleware from 'koa-webpack-dev-middleware';
import hotMiddleware from 'koa-webpack-hot-middleware';


const app = new koa();

const compiler = webpack(config);

app.use(devMiddleware(compiler, {
    stats: {
        colors: true
    },
    publicPath: config.output.publicPath
}));

app.use(hotMiddleware(compiler));

app.use(serve('dist'));

app.listen(8080, () => {
    console.log('Server is listening');
});
