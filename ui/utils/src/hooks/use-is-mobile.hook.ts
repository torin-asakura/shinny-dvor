import debounce      from 'lodash/debounce'
import { useEffect } from 'react'
import { useState }  from 'react'

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const updateSize = () => {
      setIsMobile(window.innerWidth < 900)
    }
    const debouncedFn = debounce(updateSize, 250)
    updateSize()

    window.addEventListener('resize', debouncedFn)

    return () => window.removeEventListener('resize', debouncedFn)
  }, [])

  return isMobile
}

export { useIsMobile }
