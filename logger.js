const log4js = require('log4js');

log4js.configure({
  appenders: { console: { type: 'console', layout: { type: 'colored' } } },
  categories: { default: { appenders: ['console'], level: 'INFO' } },
  replaceConsole: true,
});

module.exports = log4js;