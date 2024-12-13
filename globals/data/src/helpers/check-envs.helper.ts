import type { CheckEnvsHelperType } from './check-envs.interface.js'

import { CheckEnvsError }           from '../error/index.js'
import { getCheckEnvsErrorMessage } from '../error/index.js'

export const checkEnvsHelper: CheckEnvsHelperType = ({
  applicationName,
  envsList,
  isDevelopment,
}): void => {
  for (const envName of envsList) {
    if (!process.env[envName]) {
      // eslint-disable-next-line no-console
      if (isDevelopment) console.error(getCheckEnvsErrorMessage(applicationName, envName))
      else throw new CheckEnvsError(applicationName, envName)
    }
  }
}
