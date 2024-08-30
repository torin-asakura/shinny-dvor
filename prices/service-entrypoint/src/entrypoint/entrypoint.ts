import { Logger }       from '@atls/logger'

import { getBootstrap } from '../bootstrap/index.js'
import { getCronTask }  from '../cron/cron.js'

const logger = new Logger('Bootstrap')
const bootstrap = getBootstrap(logger)
const cronTask = getCronTask(logger, bootstrap)

cronTask.start()
bootstrap()
