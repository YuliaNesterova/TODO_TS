// eslint-disable-next-line
const proxy = require('http-proxy-middleware');

module.exports = app => {
  app.use(
    '/todos',
    proxy({
      target: 'http://localhost:8080',
    }),
  );
};
