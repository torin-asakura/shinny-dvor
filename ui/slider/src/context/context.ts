import { createContext } from 'react'

import { SliderStore }   from './store'

const Context = createContext<SliderStore>(new SliderStore())

export { Context }
