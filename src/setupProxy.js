const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://rankd-api-dev.azurewebsites.net",
      changeOrigin: true,
    })
  );
};
