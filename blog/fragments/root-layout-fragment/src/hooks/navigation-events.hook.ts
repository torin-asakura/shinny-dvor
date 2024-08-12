import { usePathname }     from 'next/navigation.js'
import { useSearchParams } from 'next/navigation.js'
import { useEffect }       from 'react'

import { progressBar }     from '@ui/progress-bar'

export const NavigationEvents = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    progressBar.finish()
  }, [pathname, searchParams])
  return null
}
