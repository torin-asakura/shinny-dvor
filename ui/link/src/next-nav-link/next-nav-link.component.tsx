import React              from 'react'

import { LinkProps }      from '../link.interfaces.js'
import { NavLink }        from '../nav-link/index.js'
import { useNextNavLink } from './hooks/index.js'

export const NextNavLink: LinkProps = (props) => {
  const NextNavLinkRenderer = useNextNavLink(NavLink)
  return <NextNavLinkRenderer {...props} />
}
