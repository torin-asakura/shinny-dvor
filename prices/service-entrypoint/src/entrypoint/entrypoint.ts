import { Logger }               from '@atls/logger'

import { PRICES_REQUIRED_ENVS } from '@globals/config'
import { checkEnvsHelper }      from '@globals/data'

import { getBootstrap }         from '../bootstrap/index.js'
import { getCronTask }          from '../cron/cron.js'

checkEnvsHelper({ applicationName: 'prices', envsList: PRICES_REQUIRED_ENVS })

const logger = new Logger('Bootstrap')
const bootstrap = getBootstrap(logger)
const cronTask = getCronTask(logger, bootstrap)

cronTask.start()
bootstrap()
