# gosugamers-matches

Get information on every match on a page of GosuGamer's match history.

## Example

``` javascript
var gosugamersMatches = require('gosugamers-matches');

gosugamersMatches(1, function(error, data) {
  if (error) {
    throw error;
  }

  // => `data` is _Array_ of _Objects_ from gosugamers-match
});
```

## Installation

``` bash
$ npm install gosugamers-matches
```

## API

``` javascript
var gosugamersMatches = require('gosugamers-matches');
```

### `gosugamersMatches(page, callback)`

Given _Number_ `page` and _Function_ `callback`, calls `callback(error, data)`,
where `error` is any _Error_ encountered and _Array_ `data` contains information
on every match on page `page` of GosuGamers's match history. Information is
parsed by [gosugamers-match](https://github.com/KenanY/gosugamers-match).