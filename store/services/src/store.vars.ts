import { makeVar } from '@apollo/client'

import { Service } from './store.interfaces'

export const serviceVar = makeVar<Service>({
  radius: '',
  carBody: '',
  serviceName: '',
})
