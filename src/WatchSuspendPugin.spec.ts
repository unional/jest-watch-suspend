import { WatchSuspendPlugin } from './WatchSuspendPlugin';

test('test will run on start by default', () => {
  const plugin = new WatchSuspendPlugin({ config: {} })
  const th = testHarness()
  plugin.apply(th.jestHooks)

  expect(th.shouldRunTestSuiteCallback()).toBe(true)
})

test('suspend on start = false will run test on start', () => {
  const plugin = new WatchSuspendPlugin({ config: { 'suspend-on-start': false } })
  plugin.firstRun = true
  const th = testHarness()
  plugin.apply(th.jestHooks)

  expect(th.shouldRunTestSuiteCallback()).toBe(true)
})

test('suspend on start will stop the very first run', () => {
  const plugin = new WatchSuspendPlugin({ config: { 'suspend-on-start': true } })
  plugin.firstRun = true
  const th = testHarness()
  plugin.apply(th.jestHooks)
  plugin.log = () => { }

  expect(th.shouldRunTestSuiteCallback()).toBe(false)
})

test('suspend on start will should message', () => {
  const plugin = new WatchSuspendPlugin({ config: { 'suspend-on-start': true } })
  plugin.firstRun = true
  const th = testHarness()
  plugin.apply(th.jestHooks)
  let called = false
  plugin.log = () => called = true
  expect(th.shouldRunTestSuiteCallback()).toBe(false)
})

test('suspend on start will not affect subsequence run', () => {
  const plugin = new WatchSuspendPlugin({ config: { 'suspend-on-start': true } })
  plugin.firstRun = true
  const th = testHarness()
  plugin.apply(th.jestHooks)
  plugin.log = () => { }

  expect(th.shouldRunTestSuiteCallback()).toBe(false)
  expect(th.shouldRunTestSuiteCallback()).toBe(true)
  expect(th.shouldRunTestSuiteCallback()).toBe(true)
})

test('usage info default to s and "suspend watch mode"', () => {
  const plugin = new WatchSuspendPlugin({ config: {} })
  const actual = plugin.getUsageInfo()
  expect(actual.key).toBe('s')
  expect(actual.prompt).toBe('suspend watch mode')
})

test('usage info can be customized', () => {
  const plugin = new WatchSuspendPlugin({ config: { key: 'x', prompt: 'pp' } })
  const actual = plugin.getUsageInfo()
  expect(actual.key).toBe('x')
  expect(actual.prompt).toBe('pp')
})

test('if not suspended, when test complete will not print message', () => {
  const plugin = new WatchSuspendPlugin({ config: {} })
  const th = testHarness()
  plugin.apply(th.jestHooks)
  plugin.log = () => { throw new Error('should not call') }
  th.onTestRunCompleteCallback()
})

test('if suspended, when test complete will print message', () => {
  const plugin = new WatchSuspendPlugin({ config: {} })
  plugin.suspend = true
  const th = testHarness()
  plugin.apply(th.jestHooks)
  let called = false
  plugin.log = () => called = true
  th.onTestRunCompleteCallback()

  expect(called).toBe(true)
})

test('if suspended, when test complete will print message when in verbose', () => {
  const plugin = new WatchSuspendPlugin({ config: {} })
  const th = testHarness()
  plugin.apply(th.jestHooks)
  let called = false
  plugin.log = () => called = true
  plugin.run({ verbose: true })
  th.onTestRunCompleteCallback()

  expect(called).toBe(true)
})

test('triggering will flip suspend or resume', () => {
  const plugin = new WatchSuspendPlugin({ config: {} })
  plugin.log = () => { }
  plugin.run({})
  expect(plugin.suspend).toBe(true)
  plugin.run({})
  expect(plugin.suspend).toBe(false)
})

test('trigger suspend will print message', () => {
  const plugin = new WatchSuspendPlugin({ config: {} })
  let called = false
  plugin.log = () => called = true
  plugin.run({})
  expect(called).toBe(true)
})

test('if suspend, usage info prompt "resume watch mode"', () => {
  const plugin = new WatchSuspendPlugin({ config: {} })
  plugin.suspend = true
  const actual = plugin.getUsageInfo()
  expect(actual.prompt).toBe('resume watch mode')
})

function testHarness() {
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
