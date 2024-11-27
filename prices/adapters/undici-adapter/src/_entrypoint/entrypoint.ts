import { Logger }       from '@atls/logger'

import { getCronTask }  from '../getters/index.js'
import { getBootstrap } from '../getters/index.js'

const logger = new Logger('Bootstrap')
const bootstrap = getBootstrap(logger)
const cronTask = getCronTask(logger, bootstrap)

cronTask.start()
if (bootstrap) bootstrap()
