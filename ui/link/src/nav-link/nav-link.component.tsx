import type { LinkProps } from '../link.interfaces.js'

import React              from 'react'

import { BaseLink }       from '../base-link/index.js'
import { baseNavLink }    from './nav-link.css.js'
import { navLink }        from './nav-link.css.js'

export const NavLink: LinkProps = (props) => {
  const { active } = props
  const navLinkClassName = navLink[active ? 'active' : 'default']
  return <BaseLink {...props} className={`${baseNavLink} ${navLinkClassName}`} />
}
