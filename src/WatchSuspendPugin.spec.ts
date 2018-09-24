import { WatchSuspendPlugin } from './WatchSuspendPlugin';

test('suspend on start will stop the very first run', () => {
  const plugin = new WatchSuspendPlugin({ config: { 'suspend-on-start': true } })
  const th = testHarness()
  plugin.apply(th.jestHooks)

  expect(th.shouldRunTestSuiteCallback()).toBe(false)
})

test('suspend on start will not affect subsequence run', () => {
  const plugin = new WatchSuspendPlugin({ config: { 'suspend-on-start': true } })
  const th = testHarness()
  plugin.apply(th.jestHooks)

  expect(th.shouldRunTestSuiteCallback()).toBe(false)
  expect(th.shouldRunTestSuiteCallback()).toBe(true)
  expect(th.shouldRunTestSuiteCallback()).toBe(true)
})

function testHarness(): any {
  const th = {
    shouldRunTestSuiteCallback() { },
    onTestRunCompleteCallback() { },
    jestHooks: {
      shouldRunTestSuite(fn) { th.shouldRunTestSuiteCallback = fn },
      onTestRunComplete(fn) { th.onTestRunCompleteCallback = fn }
    }
  }
  return th
}
