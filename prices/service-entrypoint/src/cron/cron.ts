import { CronJob } from 'cron'

const getCronTask = (logger: any, bootstrap: any) => {
  const cronTask = new CronJob('0 0 * * 0', () => {
    logger.info('task started')

    bootstrap()

    logger.info('task completed')
  })

  return cronTask
}

export { getCronTask }
