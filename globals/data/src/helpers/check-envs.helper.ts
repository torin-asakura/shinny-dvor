import type { CheckEnvsHelperType } from './check-envs.interface.js'

import { CheckEnvsError }           from '../error/index.js'

export const checkEnvsHelper: CheckEnvsHelperType = ({ applicationName, envsList }): void => {
  for (const envName of envsList) {
    if (!process.env[envName]) throw new CheckEnvsError(applicationName, envName)
  }
}
