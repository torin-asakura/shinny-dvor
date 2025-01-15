import type { GetObserverOptionsGetter } from './get-observer-options.interface.js'
import type { Return }                   from './get-observer-options.interface.js'

import { PageIntersectionObserver }      from '@ui/intersection-observer'

export const getObserverOptionsGetter: GetObserverOptionsGetter = ({
  isLoaded,
  setActive,
}): ((id: string) => Return) => {
  const onIntersection = (id: string): void => {
    const order = ['hero', 'services', 'articles', 'infographics', 'works-examples']
    if (isLoaded.current) {
      setActive(order.indexOf(id))
    }
  }
  const intersectionObserver = new PageIntersectionObserver(onIntersection)
  intersectionObserver.init()
  const getObserverOptions = (id: string): Return => intersectionObserver.getObserverOptions(id)

  return getObserverOptions
}
