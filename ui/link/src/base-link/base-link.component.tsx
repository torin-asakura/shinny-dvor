import React             from 'react'
import clsx              from 'clsx'

import { BaseLinkProps } from './base-link.interfaces.js'
import { baseLink }      from './base-link.css.js'
import { linkVariants }  from './base-link.css.js'

export const BaseLink: React.FC<BaseLinkProps> = ({ active, className, children, ...props }) => {
  const linkClassName = clsx(baseLink, linkVariants[active ? 'active' : 'default'], className)

  return (
    <a className={linkClassName} {...props}>
      {children}
    </a>
  )
}
