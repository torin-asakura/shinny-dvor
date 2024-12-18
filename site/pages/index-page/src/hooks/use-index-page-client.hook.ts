import type { UseIndexPageClientType } from './use-index-page-client.interface.js'

import { useRef }                      from 'react'
import { useEffect }                   from 'react'

import { getData }                     from '../getters/index.js'
import { getObserverOptionsGetter }    from '../getters/index.js'

export const useIndexPageClient: UseIndexPageClientType = ({
  setActive,
  setScrollY,
  servicesDataToReplace,
}) => {
  const headerRef = useRef<HTMLDivElement | null>(null)
  const isLoaded = useRef<boolean>(false)

  const scrollHandler = (): void => {
    console.log(headerRef.current)
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
