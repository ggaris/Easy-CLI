export default (config)=>{
const CODE = `const app = new Koa();
${config.middleware.static ? `const serve = require("koa-satic");
app.use(serve(__dirname + "/static"));` : ''}
${config.middleware.router ? `
const router = new Router();
router.get('/',(ctx)=>{
  ctx.body = 'hello koa-setup-test'
});
app.use(router.routes());` : ''}

app.listen(${config.port},()=>{
  console.log("open server localhost:${config.port}");
})
`
return CODE
}