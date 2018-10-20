import chalk from 'chalk'
import { unpartial } from 'unpartial'
export interface Config {
  'suspend-on-start': boolean,
  key: string,
  prompt: string
}
export type JestGlobalConfigUsed = Pick<jest.GlobalConfig, 'verbose'>

export class WatchSuspendPlugin {
  globalConfig: Partial<JestGlobalConfigUsed> = {}
  log = console.info
  config: Config
  suspend: boolean
  constructor({ config }: { config: Partial<Config> }) {
    this.config = unpartial({ 'suspend-on-start': false, key: 's', prompt: 'suspend watch mode' }, config)
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
  run(globalConfig: Partial<JestGlobalConfigUsed>) {
    this.globalConfig = globalConfig
    this.suspend = !this.suspend
    if (this.suspend) {
      this.log(chalk.bold('\nTest is suspended.'))
    }
    return Promise.resolve(!this.suspend)
  }
}
