
// 测试打印时间 中间件
module.exports = (options, app) => {
    //  返回一个异步方法
    return async function printDate(ctx, next) {
        console.log(new Date(), options)
        await next()
    }
}