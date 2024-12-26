import type { GetObserverOptionsGetter } from './get-observer-options.interface.js'

import { PageIntersectionObserver }      from '@ui/intersection-observer'

export const getObserverOptionsGetter: GetObserverOptionsGetter = ({ isLoaded, setActive }) => {
  const onIntersection = (id: string) => {
    const order = ['hero', 'services', 'articles', 'infographics', 'works-examples']
    if (isLoaded.current) {
      setActive(order.indexOf(id))
    }
  }
  const intersectionObserver = new PageIntersectionObserver(onIntersection)
  intersectionObserver.init()
  const getObserverOptions = (id: string) => intersectionObserver.getObserverOptions(id)

  return getObserverOptions
}
