import React           from 'react'

import { Context }     from './context'
import { SliderStore } from './store'

const SliderProvider = (props) => {
  const store = new SliderStore().register()

  return <Context.Provider value={store} {...props} />
}

export { SliderProvider }
