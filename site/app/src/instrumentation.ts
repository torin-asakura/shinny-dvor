import { REQUIRED_ENVS }   from '@globals/config'
import { checkEnvsHelper } from '@globals/data'

export const register = () => {
  checkEnvsHelper({ applicationName: 'site', envsList: REQUIRED_ENVS })
}
