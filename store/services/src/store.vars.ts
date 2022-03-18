import { makeVar }      from '@apollo/client'

import { ALL_SERVICES } from './store.constants'
import { Screen }       from './store.interfaces'

export const screenVar = makeVar<Screen>(ALL_SERVICES)
