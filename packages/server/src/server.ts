import Koa from "koa";
import helmet from "koa-helmet";
import bodyParser from "koa-body";

const app = new Koa();

app.use(helmet());
app.use(bodyParser());

app.use(async (ctx) => {
  ctx.body = "Hello World";
});

app.listen(4000);

export default app;
