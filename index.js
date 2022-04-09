const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const userRouter = require('./router/getHR')
const loginRouter = require('./router/login')

const app = new Koa()

app.use(bodyParser())
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())
app.use(loginRouter.routes())
app.use(loginRouter.allowedMethods())

app.listen(8000, () => console.log('服务器启动成功'))