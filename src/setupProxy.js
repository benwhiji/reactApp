// src/setupProxy.js

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://qmobile.qmart.co.za/chiefs-assessment-api/api/players',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/chiefs-assessment-api/api' // Rewrite path if necessary
      },
    })
  );
};
