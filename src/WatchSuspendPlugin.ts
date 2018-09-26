import chalk from 'chalk'
export class WatchSuspendPlugin {
  globalConfig: jest.GlobalConfig = {} as any
  log = console.info
  config: { 'suspend-on-start': boolean, key: string, prompt: string }
  suspend: boolean
  constructor({ config }) {
    this.config = { key: 's', prompt: 'suspend watch mode', ...config }
    this.suspend = this.config['suspend-on-start'];
  }

  // Add hooks to Jest lifecycle events
  apply(jestHooks) {
    jestHooks.shouldRunTestSuite(() => {
      return !this.suspend
    })
    jestHooks.onTestRunComplete(() => {
      if (this.suspend) {
        this.log(this.globalConfig.verbose ? chalk.bold(`Test is suspended.`) : chalk.gray(`Test is suspended.`))
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
  run(globalConfig) {
    this.globalConfig = globalConfig
    this.suspend = !this.suspend
    if (this.suspend) {
      this.log(chalk.bold('\nTest is suspended.'))
    }
    return Promise.resolve(!this.suspend)
  }
}
