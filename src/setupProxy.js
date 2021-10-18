// eslint-disable-next-line
const proxy = require('http-proxy-middleware');

module.exports = app => {
  app.use(
    '/todos',
    proxy({
      target: 'http://localhost:8080',
    }),
  );
  app.use(
    '/I18N',
    proxy({
      // target: 'http://speu-i18n.suppliers-portal-ru.svc.k8s.stage',
      target: 'http://127.0.0.1:8080',
      changeOrigin: true,
    }),
  );
};
