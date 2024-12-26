import { SITE_REQUIRED_ENVS } from '@globals/config'
import { checkEnvsHelper }    from '@globals/data'

export const register = (): void => {
  checkEnvsHelper({
    applicationName: 'site',
    envsList: SITE_REQUIRED_ENVS,
    isDevelopment: process.env.NODE_ENV === 'development',
  })
}
