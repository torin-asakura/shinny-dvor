import type { Service } from './store.interfaces.js'

import { makeVar }      from '@apollo/client'

export const serviceVar = makeVar<Service>({
  radius: '',
  carBody: '',
  serviceName: '',
})
