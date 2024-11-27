import type { Logger } from '@atls/logger'

import { CronJob }     from 'cron'

export const getCronTask = (logger: Logger, bootstrap: (() => Promise<void>) | undefined) => {
  const cronTask = new CronJob('0 0 * * 0', () => {
    logger.info('task started')
    if (bootstrap) bootstrap()
    logger.info('task completed')
  })
  return cronTask
}
