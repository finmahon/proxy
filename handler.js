var proxy = require('express-http-proxy');
module.exports = function (params) {
  return proxy(params.target);
}