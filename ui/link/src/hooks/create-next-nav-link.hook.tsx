import type { CreateNextNavLinkType } from './create-next-nav-link.interface.js'

import { useRouter }                  from 'next/navigation.js'
import { usePathname }                from 'next/navigation.js'
import React                          from 'react'

import { progressBar }                from '@ui/progress-bar'

export const createNextNavLink: CreateNextNavLinkType = (Link, pathProp = 'path') => {
  const router = useRouter()
  const pathname = usePathname()

  return (props) => (
    <Link
      {...{ [pathProp]: props[pathProp], ...props }}
      active={pathname === props[pathProp]}
      onClick={(event: Event) => {
        event.preventDefault()
        progressBar.start()
        if (router) {
          router.push(props[pathProp])
        }
      }}
    />
  )
}
