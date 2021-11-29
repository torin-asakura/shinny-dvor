import { makeVar }      from '@apollo/client'

import { Screen }       from './store.interfaces'
import { ALL_SERVICES } from './store.constants'

export const screenVar = makeVar<Screen>(ALL_SERVICES)
