import { makeVar } from '@apollo/client'

import { INITIAL } from './store.constants.js'
import { Screen }  from './store.interfaces.js'

export const screenVar = makeVar<Screen>(INITIAL)
export const activeRadiusVar = makeVar<boolean>(false)
export const activeCarBodyVar = makeVar<boolean>(false)
