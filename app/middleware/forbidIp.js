// 屏蔽ip中间件
module.exports = (options, app) => {
    //  返回一个异步方法
    return async function forbidIp(ctx, next) {
        let testIp = '127.0.0.1'
        console.log(ctx.request.ip, 'ip')
        if (testIp == ctx.request.ip) {
            ctx.status = 403
            ctx.body = '您的ip已经被屏蔽'
            return
        }
        await next()
    }
}