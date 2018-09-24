# jest-watch-suspend

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Build status][circleci-image]][circleci-url]
[![Codecov][codecov-image]][codecov-url]

[![Greenkeeper badge][green-keeper-image]][green-keeper-url]
[![semantic-release][semantic-release-image]][semantic-release-url]

Pausing watch mode of [`jest`](https://jestjs.io/) when you want it to.

## Usage

To use `jest-watch-suspend`,
add it to the `watchPlugins` section of the Jest configuration:

```js
{
  "jest": {
    "watchPlugins": [
      "jest-watch-suspend",
      ["jest-watch-suspend", { "key": "s", "prompt": "suspend watch mode" }]
      ["jest-watch-suspend", { "suspend-on-start": true }]
    ]
  }
}
```

[npm-image]: https://img.shields.io/npm/v/jest-watch-suspend.svg?style=flat
[npm-url]: https://npmjs.org/package/jest-watch-suspend
[downloads-image]: https://img.shields.io/npm/dm/jest-watch-suspend.svg?style=flat
[downloads-url]: https://npmjs.org/package/jest-watch-suspend
[circleci-image]: https://circleci.com/gh/unional/jest-watch-suspend/tree/master.svg?style=shield
[circleci-url]: https://circleci.com/gh/unional/jest-watch-suspend/tree/master
[codecov-image]: https://codecov.io/gh/unional/jest-watch-suspend/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/unional/jest-watch-suspend
[green-keeper-image]:
https://badges.greenkeeper.io/unional/jest-watch-suspend.svg
[green-keeper-url]:https://greenkeeper.io/
[semantic-release-image]:https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]:https://github.com/semantic-release/semantic-release
