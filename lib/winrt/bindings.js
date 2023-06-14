const events = require('events');
const util = require('util');

const NobleWinrt = require('node-gyp-build')(__dirname).NobleWinrt;

util.inherits(NobleWinrt, events.EventEmitter);

module.exports = NobleWinrt;
