var convert = require('../lib')
  , assert = require('assert')
  , tests = {};

tests['measures'] = function () {
  var actual = convert().measures()
    , expected = [ 'length', 'area', 'mass', 'volume', 'each', 'temperature', 'time', 'bits', 'bitspersecond', 'bytes', 'bytespersecond', 'bibytes', 'bibytespersecond', 'bibits', 'bibitspersecond', 'partsPer', 'speed', 'pace', 'pressure', 'current', 'voltage', 'power', 'reactivePower', 'apparentPower', 'energy', 'reactiveEnergy', 'volumeFlowRate', 'illuminance', 'frequency', 'angle', 'charge', 'force', 'acceleration' ];
  assert.deepEqual(actual, expected);
};

module.exports = tests;
