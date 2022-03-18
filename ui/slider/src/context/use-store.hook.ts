import { useContext }  from 'react'

import { Context }     from './context'
import { SliderStore } from './store'

const useStore = (): SliderStore => useContext<SliderStore>(Context)

export { useStore }
