import type { UseIndexPageClientType } from './use-index-page-client.interface.js'

import { useEffect }                   from 'react'

import { useIntersectionObserver }     from '@ui/intersection-observer'

export const useIndexPageClient: UseIndexPageClientType = ({
  isLoaded,
  setActive,
  headerRef,
  setScrollY,
}) => {
  useEffect(() => {
    setTimeout(() => {
      isLoaded.current = true
    }, 200)
  }, [isLoaded])

  const { getObserverOptions } = useIntersectionObserver((id) => {
    const order = ['hero', 'services', 'articles', 'infographics', 'works-examples']
    if (isLoaded.current) {
      setActive(order.indexOf(id))
    }
  })

  const scrollHandler = () => {
    const y = headerRef!.current!.getBoundingClientRect()

    setScrollY(y.y)
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler, false)
    return () => window.removeEventListener('scroll', scrollHandler, false)
  }, [scrollHandler])

  return { getObserverOptions }
}
