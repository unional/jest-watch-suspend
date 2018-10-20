module.exports = {
  "preset": "ts-jest",
  "globals": {
    "ts-jest": {
      "diagnostics": false
    }
  },
  "reporters": [
    "default",
    "jest-audio-reporter"
  ],
  "roots": [
    "<rootDir>/src"
  ],
  "testEnvironment": "node",
  "watchPlugins": [
    [
      "<rootDir>/dist/index.js",
      {
        "suspend-on-start": true
      }
    ],
    [
      "jest-watch-toggle-config",
      {
        "setting": "verbose"
      }
    ],
    [
      "jest-watch-toggle-config",
      {
        "setting": "collectCoverage"
      }
    ]
  ]
}
