
const moment = require('moment')
  class winstonLogger {
    constructor() {
      this.winston = require ("winston")
      this.transport = new (winston.transports.Console)({
      level: 'debug',
      colorize: true,
      timestamp : true,
      'timestamp':function() {
        return moment(new Date).format("h:mm:ss")
      }
      });
      this.logger = new (this.winston.Logger)({
      transports: [this.transport]
      });
    }
  }

module.exports = winstonLogger;
