var Benchmark = require('benchmark'),
    moment = require('./../moment.js'),
    base = new Date();

module.exports = {
  name: 'fromDateUtc',
  onComplete: function(){console.log('done');},
  fn: function(){
      moment.utc(base);
  },
  async: true
};
