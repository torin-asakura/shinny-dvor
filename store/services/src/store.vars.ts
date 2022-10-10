import { makeVar }      from '@apollo/client'

import { ALL_SERVICES } from './store.constants'
import { Screen }       from './store.interfaces'
import { Service }      from './store.interfaces'

export const screenVar = makeVar<Screen>(ALL_SERVICES)
export const serviceVar = makeVar<Service>({
  radius: '',
  serviceName: '',
  price: 0,
  addon: '',
  description: '',
  variant: '',
  workexamples: {
    firstexample: {
      image: {
        altText: '',
        sourceUrl: '',
      },
      price: 0,
      title: '',
    },
    secondexample: {
      image: {
        altText: '',
        sourceUrl: '',
      },
      price: 0,
      title: '',
    },
  },
  additionalservice: {
    title: '',
    price: 0,
  },
})
