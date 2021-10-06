const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = app => {
    app.use(
        '/todos',
        createProxyMiddleware({
            target: 'http://localhost:8080'
        }),
    );
};
