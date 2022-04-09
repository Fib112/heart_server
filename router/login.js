const { default: axios } = require('axios')
const Router = require('koa-router')
const queryUser = require('../dbService/queryUser')
const createUser = require('../dbService/createUser')

const loginRouter = new Router({prefix: '/login'})

const APPID = 'wxf1239f834fc00c09'
const SECRET = 'c9e331e770cc5422a571a63d8eb5b1da'

loginRouter.post('/', async (ctx, next) => {
    const { js_code, nickName, avatarUrl } = ctx.request.body
    const res = await axios.get(`https://api.weixin.qq.com/sns/jscode2session?appid=${APPID}&secret=${SECRET}&js_code=${js_code}&grant_type=authorization_code`)
    const { openid, session_key } = res.data
    const userInfo = await queryUser(openid)
    if (userInfo.openid === -1) {
        await createUser(openid, nickName, avatarUrl)
    }
    ctx.body = {
        openid,
        session_key
    }
})

module.exports = loginRouter