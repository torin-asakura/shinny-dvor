import { useContext } from 'react'

import { Context }    from './context.js'

const useActive = () => useContext(Context)

export { useActive }
