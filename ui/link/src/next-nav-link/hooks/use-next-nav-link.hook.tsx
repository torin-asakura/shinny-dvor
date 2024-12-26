import type { UseNextNavLinkType } from './use-next-nav-link.interface.js'

import React                       from 'react'
import { useRouter }               from 'next/navigation.js'
import { usePathname }             from 'next/navigation.js'

import { progressBar }             from '@ui/progress-bar'

export const useNextNavLink: UseNextNavLinkType = (Link, pathProp = 'path') => {
  const router = useRouter()
  const pathname = usePathname()

  return (props) => {
    const newPathname: string = props[pathProp]

    const handleClick = (event: Event): void => {
      event.preventDefault()
      if (pathname !== newPathname) {
        progressBar.start()
        if (router) {
          router.push(newPathname)
        }
      }
    }

    return (
      <Link
        {...{ [pathProp]: newPathname, ...props }}
        active={pathname === newPathname}
        onClick={handleClick}
      />
    )
  }
}
