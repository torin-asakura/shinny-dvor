import type { UseNextNavLinkType } from './use-next-link.interface.js'

import React                       from 'react'
import { useRouter }               from 'next/navigation.js'
import { usePathname }             from 'next/navigation.js'

import { progressBar }             from '@ui/progress-bar'

export const useNextLink: UseNextNavLinkType = (Link, pathProp = 'path') => {
  const router = useRouter()

  return (props) => {
    const newPathname: string = props[pathProp]
    const currentPathname = usePathname()

    const handleClick = (event: Event): void => {
      event.preventDefault()
      if (currentPathname !== newPathname) {
        progressBar.start()
        if (router) {
          router.push(newPathname)
        }
      }
    }

    return <Link {...{ [pathProp]: newPathname }} onClick={handleClick} {...props} />
  }
}
