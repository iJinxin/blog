// CORS
// MDN doc: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
module.exports = (option = {}) => {
    const options = {
        allowOrigin: '*',
        allowMethod: ['GET', 'POST', 'OPTION', 'PUT', 'DELETE'],
        allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
        credentials: true,
        maxAge: 10, // second
    };
    return async (ctx, next) => {
        // If the server specifies a single origin rather than the "*" wildcard
        // then the server should also include Origin in the Vary response header
        if (options.allowOrigin !== '*') {
            ctx.vary('Origin');
        }

        // Access-Control-Allow-Origin
        ctx.set('Access-Control-Allow-Origin', options.allowOrigin);

        // Access-Control

        // Preflight Request
        if (ctx.method === 'OPTION') {
            
            /* Access-Control-Max-Age */
            // it gives the value in seconds for how long the response to the prefight request can be cached for
            // without sending another preflight request.
            // Note that each browser has a maximum internal value that takes precedence when the Access-Control-Max-Age is greater.
            ctx.set('Access-Control-Max-Age', options.maxAge);

            /* Access-Control-Allow-Credentials */
            // since request headers include a Cookie header,
            // if Access-Control-Allow-Origin was setted as '*'
            // request will fail if you set Access-Control-Allow-Credentials: 'true'
            if (options.credentials && options.allowOrigin !== '*') {
                ctx.set('Access-Control-Allow-Credentials', 'true');
            }

            // Access-COntrol-Allow-Methods
            ctx.set('Access-COntrol-Allow-Methods', options.allowMethod.join(','));

            // Access-Control-Allow-Headers
            ctx.set('Access-Control-Allow-Headers', ctx.get('Access-Control-Request-Headers'));
        } else {
            // Request

            // Access-Control-Allow-Credentials
            // simple GET requests are not preflighted
            // if (options.credentials && options.allowOrigin !== '*') {
            //     ctx.set('Access-Control-Allow-Credentials', 'true');
            // }

            if (options.allowOrigin === '*') {
                ctx.remove('Access-Control-Allow-Credentials');
            }

            try {
                await next();
            } catch (error) {
                throw error;
            }
        }
    }
}