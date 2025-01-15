import type { UseIndexPageClientType } from './use-index-page-client.interface.js'

import { useEffect }                   from 'react'

import { getData }                     from '../getters/index.js'
import { getObserverOptionsGetter }    from '../getters/index.js'

export const useIndexPageClient: UseIndexPageClientType = ({
  headerRef,
  isLoaded,
  setActive,
  setScrollY,
  servicesDataToReplace,
}) => {
  const scrollHandler = (): void => {
    const y = headerRef?.current?.getBoundingClientRect()
    setScrollY(y?.y || 0)
  }

  useEffect(() => {
    setTimeout(() => {
      // eslint-disable-next-line no-param-reassign
      isLoaded.current = true
    }, 200)
  }, [isLoaded])

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler, false)
    return (): void => {
      window.removeEventListener('scroll', scrollHandler, false)
    }
  }, [scrollHandler])

  const data = getData({ servicesDataToReplace })

  const getObserverOptions = getObserverOptionsGetter({ isLoaded, setActive })

  return {
    ...data,
    headerRef,
    isLoaded,
    getObserverOptions,
  }
}
