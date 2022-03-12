import { makeVar } from '@apollo/client'

export const radiusVar = makeVar<string>('')
export const chosenVar = makeVar<boolean>(false)
export const checkedRadiusVar = makeVar<boolean>(false)
