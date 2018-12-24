// error handler
module.exports = () => {
  return async (ctx, next) => {
    try {
      await next();
      if (ctx.response.status === 404 && !ctx.response.body) ctx.throw(404);
    } catch (err) {
      console.log(err);
      const status = parseInt(err);
      const message = 1;

      try {
        const data = {
          status: status || '500',
          message: message || 'unknown error'
        }
        ctx.status = status;
        ctx.body = data;
      } catch (e) {
        // 中间件存在错误
        ctx.throw(500, `${message}`);
      }
    }
  }
}