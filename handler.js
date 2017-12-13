var proxy = require('express-http-proxy');
module.exports = function (params) {
  console.log('handler ' + params.target)
  return proxy(params.target);
}