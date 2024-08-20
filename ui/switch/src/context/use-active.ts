import { useContext } from 'react'

import { Context }    from './context.js'

const useActive = (): string => useContext(Context)

export { useActive }
