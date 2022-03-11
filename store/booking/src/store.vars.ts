import { makeVar } from '@apollo/client'

import { Screen }  from './store.interfaces'
import { INITIAL } from './store.constants'

export const screenVar = makeVar<Screen>(INITIAL)
export const activeRadiusVar = makeVar<boolean>(false)
export const activeCarBodyVar = makeVar<boolean>(false)
export const activeSelectVar = makeVar<string>('')
