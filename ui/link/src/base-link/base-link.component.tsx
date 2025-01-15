import type { BaseLinkProps } from './base-link.interfaces.js'

import { memo }               from 'react'
import React                  from 'react'
import clsx                   from 'clsx'

import { baseLink }           from './base-link.css.js'
import { linkVariants }       from './base-link.css.js'

export const BaseLink = memo(({ fill, active, className, children, ...props }: BaseLinkProps) => {
  const linkClassName = clsx(
    baseLink,
    linkVariants[active ? 'active' : 'default'],
    fill && linkVariants.fill,
    className
  )

  return (
    <a className={linkClassName} {...props}>
      {children}
    </a>
  )
})
