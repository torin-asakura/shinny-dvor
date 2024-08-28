import { makeVar } from '@apollo/client'

import { Service } from './store.interfaces.js'

export const serviceVar = makeVar<Service>({
  radius: '',
  carBody: '',
  serviceName: '',
})
