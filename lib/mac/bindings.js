const events = require('events');
const util = require('util');

const NobleMac = require('node-gyp-build')(__dirname).NobleMac;

util.inherits(NobleMac, events.EventEmitter);

module.exports = NobleMac;
