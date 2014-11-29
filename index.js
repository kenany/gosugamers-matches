var cheerio = require('cheerio');
var hyperquest = require('hyperquest');
var concat = require('concat-stream');
var parseMatch = require('gosugamers-match');
var eachAsync = require('each-async');

var BASE_URL = 'http://www.gosugamers.net';

function parseMatchPage(page, game, callback) {
  var ret = [];

  var stream = hyperquest(BASE_URL + '/' + game + '/gosubet?r-page=' + page);

  stream.on('error', callback);

  stream.pipe(concat(function(data) {
    var $ = cheerio.load(data);
    var recent = $('table.simple.matches').last();

    var matches = $('a.match', recent);

    var links = [];
    matches.each(function(i, el) {
      links[i] = BASE_URL + $(el).attr('href');
    });

    eachAsync(links, function(link, i, done) {
      parseMatch(link, function(error, m) {
        if (error) {
          done(error);
          return;
        }

        ret.push(m);
        done();
      });
    }, function(error) {
      if (error) {
        callback(error);
        return;
      }

      callback(null, ret);
    });
  }));
}

module.exports = parseMatchPage;