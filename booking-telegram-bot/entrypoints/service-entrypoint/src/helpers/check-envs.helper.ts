import { CheckEnvsError } from '../errors/index.js'
import { REQUIRED_ENVS }  from './check-envs.constants.js'

export const checkEnvsHelper = (): void => {
  for (const envName of REQUIRED_ENVS) {
    if (process.env[envName]) throw new CheckEnvsError(envName)
  }
}
