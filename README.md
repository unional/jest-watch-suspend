# jest-watch-suspend

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Build status][travis-image]][travis-url]
[![Codecov][codecov-image]][codecov-url]
[![Coverage Status][coveralls-image]][coveralls-url]

[![Greenkeeper badge][green-keeper-image]][green-keeper-url]
[![semantic-release][semantic-release-image]][semantic-release-url]

Pausing watch mode of [`jest`](https://jestjs.io/) when you want it to.

## Usage

To use `jest-watch-suspend`,
add it to the `reporters` section of the Jest configuration:

```js
{
  "jest": {
    "watchPlugins": [
      "jest-watch-suspend",
      ["jest-watch-suspend", { "key": "s", "prompt": "Suspend watch" }]
      ["jest-watch-suspend", { "suspend-on-start": true }]
    ]
  }
}
```

[npm-image]: https://img.shields.io/npm/v/jest-watch-suspend.svg?style=flat
[npm-url]: https://npmjs.org/package/jest-watch-suspend
[downloads-image]: https://img.shields.io/npm/dm/jest-watch-suspend.svg?style=flat
[downloads-url]: https://npmjs.org/package/jest-watch-suspend
[travis-image]: https://img.shields.io/travis/unional/jest-watch-suspend/master.svg?style=flat
[travis-url]: https://travis-ci.org/unional/jest-watch-suspend?branch=master
[codecov-image]: https://codecov.io/gh/unional/jest-watch-suspend/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/unional/jest-watch-suspend
[coveralls-image]: https://coveralls.io/repos/github/unional/jest-watch-suspend/badge.svg
[coveralls-url]: https://coveralls.io/github/unional/jest-watch-suspend
[green-keeper-image]:
https://badges.greenkeeper.io/unional/jest-watch-suspend.svg
[green-keeper-url]:https://greenkeeper.io/
[semantic-release-image]:https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]:https://github.com/semantic-release/semantic-release
