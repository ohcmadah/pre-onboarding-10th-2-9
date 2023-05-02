// eslint-disable-next-line import/no-extraneous-dependencies, @typescript-eslint/no-var-requires
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    '/api',
    createProxyMiddleware({
      target: process.env.REACT_APP_API_URL,
      changeOrigin: true,
      secure: process.env.NODE_ENV === 'production',
      pathRewrite: (path) => path.replace(/^\/api/, ''),
    }),
  );
};
