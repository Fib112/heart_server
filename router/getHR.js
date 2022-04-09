const Router = require('koa-router')
const computeHR = require('../compute/compute.js')

const userRouter = new Router({prefix: '/data'})


const handler = async function (ctx, next) {
    const computedHR = await computeHR(ctx.request.body.data, ctx.request.body.type)
    ctx.status = 200
    ctx.body = computedHR
}

userRouter.post('/', handler)

module.exports = userRouter