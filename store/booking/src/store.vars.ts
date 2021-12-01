import { makeVar } from '@apollo/client'

import { Screen }  from './store.interfaces'
import { INITIAL } from './store.constants'
import { SUCCESS } from './store.constants'

export const screenVar = makeVar<Screen>(INITIAL)
