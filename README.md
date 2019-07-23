# jest-watch-suspend

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Mentioned in Awesome Jest](https://awesome.re/mentioned-badge.svg)](https://github.com/jest-community/awesome-jest)

[![Circle CI][circleci-image]][circleci-url]
[![Travis CI][travis-image]][travis-url]
[![Codecov][codecov-image]][codecov-url]
[![Coveralls Status][coveralls-image]][coveralls-url]

[![Greenkeeper][greenkeeper-image]][greenkeeper-url]
[![Semantic Release][semantic-release-image]][semantic-release-url]

[![Visual Studio Code][vscode-image]][vscode-url]
[![Wallaby.js][wallaby-image]][wallaby-url]

Pausing/resuming [`jest`](https://jestjs.io/) watch mode.

Requires `jest@23+`.

## Usage

To use `jest-watch-suspend`,
add it to the `watchPlugins` section of the Jest configuration:

```js
{
  "jest": {
    "watchPlugins": [
      // default
      "jest-watch-suspend",
      // configure
      [
        "jest-watch-suspend", {
          // override key press
          "key": "s",
          // override prompt
          "prompt": "suspend watch mode",
          // starts in suspend mode
          "suspend-on-start": true
        }
      ]
    ]
  }
}
```

## Use Cases

Suspend on start:

- (suspended) ➣ `[p] + <filter>` | `[t] + <filter>` ➣ `[s]` (resume)

Setup both path and name filter before running tests:

- `[s]` (suspend) ➣ `[p] + <filter>` & `[t] + <filter>` ➣ `[s]` (resume)

Change multiple files before running tests:

- `[s]` (suspend) ➣ multiple changes and file saves ➣ `[s]` (resume)

Run code coverage after running some `test.only()` tests:

- `[s]` (suspend) ➣ change `test.only()` back to `test()` & `[e]` (with `jest-watch-toggle-config`) ➣ `[s]` (resume)

[circleci-image]: https://circleci.com/gh/unional/jest-watch-suspend/tree/master.svg?style=shield
[circleci-url]: https://circleci.com/gh/unional/jest-watch-suspend/tree/master
[codecov-image]: https://codecov.io/gh/unional/jest-watch-suspend/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/unional/jest-watch-suspend
[coveralls-image]: https://coveralls.io/repos/github/unional/jest-watch-suspend/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/unional/jest-watch-suspend?branch=master
[downloads-image]: https://img.shields.io/npm/dm/jest-watch-suspend.svg?style=flat
[downloads-url]: https://npmjs.org/package/jest-watch-suspend
[greenkeeper-image]: https://badges.greenkeeper.io/unional/jest-watch-suspend.svg
[greenkeeper-url]: https://greenkeeper.io/
[npm-image]: https://img.shields.io/npm/v/jest-watch-suspend.svg?style=flat
[npm-url]: https://npmjs.org/package/jest-watch-suspend
[semantic-release-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]: https://github.com/semantic-release/semantic-release
[travis-image]: https://img.shields.io/travis/unional/jest-watch-suspend/master.svg?style=flat
[travis-url]: https://travis-ci.org/unional/jest-watch-suspend?branch=master
[vscode-image]: https://img.shields.io/badge/vscode-ready-green.svg
[vscode-url]: https://code.visualstudio.com/
[wallaby-image]: https://img.shields.io/badge/wallaby.js-configured-green.svg
[wallaby-url]: https://wallabyjs.com
