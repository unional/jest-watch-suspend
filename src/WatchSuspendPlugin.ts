export class WatchSuspendPlugin {
  firstRun = true
  config: { 'suspend-on-start': boolean, key: string, prompt: string }
  suspend: boolean
  constructor({ config }) {
    this.config = { key: 's', prompt: 'suspend watch mode', ...config }
  }

  // Add hooks to Jest lifecycle events
  apply(jestHooks) {
    jestHooks.shouldRunTestSuite(() => {
      if (this.firstRun) {
        this.firstRun = false
        return !this.config['suspend-on-start']
      }
      return !this.suspend
    })
    jestHooks.onTestRunComplete(() => {
      if (this.suspend) {
        console.info(`Test is suspended.`)
      }
    })
  }

  // Get the prompt information for interactive plugins
  getUsageInfo() {
    return {
      key: this.config.key,
      prompt: this.suspend ? 'resume watch mode' : this.config.prompt
    }
  }

  // Executed when the key from `getUsageInfo` is input
  run() {
    this.suspend = !this.suspend
    if (this.suspend) {
      console.info('\nTest is suspended.')
    }
    return Promise.resolve(!this.suspend)
  }
}
