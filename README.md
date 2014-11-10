# duo-[cssnext](https://github.com/cssnext/cssnext)

[![Build Status](http://img.shields.io/travis/cssnext/duo-cssnext.svg)](https://travis-ci.org/cssnext/duo-cssnext)
[![NPM version](http://img.shields.io/npm/v/duo-cssnext.svg)](https://www.npmjs.org/package/duo-cssnext)

> Use tomorrow's CSS syntax, today. Via Duo.

**Issues with the output should be reported on [cssnext issue tracker](https://github.com/cssnext/cssnext/issues).**

_Follow [@cssnext](https://twitter.com/cssnext) to get latest news & [join #cssnext on irc.freenode.net](irc://irc.freenode.net/cssnext) if you have any questions._

## Install

```console
$ npm install duo-cssnext
```

## Usage

### CLI

```console
$ duo --use duo-cssnext
```

### Node.js API

```js
var duo = require("duo")
var cssnext = require("duo-cssnext")

duo(root)
  .entry(entry)
  .use(cssnext())
  .run(fn)
```

### Options

Options are directly passed to cssnext, so checkout [cssnext options](https://github.com/cssnext/cssnext#nodejs-options) directly.

_Note: `from` option is by default automatically specified using duo entry source._

---

## Contributing

Work on a branch, install dev-dependencies, respect coding style & run tests before submitting a bug fix or a feature.

    $ git clone https://github.com/cssnext/duo-cssnext.git
    $ git checkout -b patch-1
    $ npm install
    $ npm test

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
