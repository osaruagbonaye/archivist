const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/archivist',
    createProxyMiddleware({
      target: 'https://app.soak.wild.jitsuin.io',
      changeOrigin: true,
    })
  )
}