import type { CreateNextNavLinkType } from './create-next-link.interface.js'

import React                          from 'react'
import { useRouter }                  from 'next/navigation'

import { progressBar }                from '@ui/progress-bar'

export const createNextLink: CreateNextNavLinkType = (Link, pathProp = 'path') => {
  const router = useRouter()

  return (props) => (
    <Link
      {...{ [pathProp]: props[pathProp] }}
      onClick={(event: Event) => {
        event.preventDefault()
        progressBar.start()
        if (router) {
          router.push(props[pathProp])
        }
      }}
      {...props}
    />
  )
}
