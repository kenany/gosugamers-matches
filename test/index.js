var gosugamersMatches = require('../');
var test = require('tape');
var isFunction = require('lodash.isfunction');
var isArray = require('lodash.isarray');

test('exports a function', function(t) {
  t.plan(1);
  t.ok(isFunction(gosugamersMatches));
});

test('gets array of match urls', function(t) {
  t.plan(3);

  gosugamersMatches(1, function(error, matches) {
    t.error(error);
    t.ok(isArray(matches));
    t.equal(matches.length, 25);
  });
});