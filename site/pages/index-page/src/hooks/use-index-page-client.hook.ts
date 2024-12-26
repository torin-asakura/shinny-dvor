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
    const y = headerRef!.current!.getBoundingClientRect()
    setScrollY(y.y)
  }

  useEffect(() => {
    setTimeout(() => {
      isLoaded.current = true
    }, 200)
  }, [isLoaded])

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler, false)
    return () => {
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
