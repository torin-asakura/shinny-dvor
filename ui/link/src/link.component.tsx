/* eslint-disable */

import type { LinkProps }          from './link.interfaces.js'
import type { BaseLinkProps }      from './link.interfaces.js'

import styled                      from '@emotion/styled'
import { createBaseStyles }        from '@atls-ui-parts/link'

import React                       from 'react'

import { Text }                    from '@ui/text'

import { useNextNavLink }          from './hooks/index.js'
import { useNextLink }             from './hooks/index.js'
import { activeNavLinkStyles }     from './next-nav-link.styles.js'
import { appearanceNavLinkStyles } from './next-nav-link.styles.js'
import { defaultNavLinkStyles }    from './next-nav-link.styles.js'

// const BaseLink = styled(Text.withComponent('a'))<BaseLinkProps>(createBaseStyles(), ({
//   active,
//   theme,
// }) => ({
//   color: active ? theme.colors.darkBlue : theme.colors.black,
//   borderBottom: active ? theme.borders.blue : '',
//   paddingBottom: active ? '8px' : '',
// }))
//
// export const Link: LinkProps = (props) => <BaseLink {...props} />

// const Link = () => {
//   return <h1>Link</h1>
// }

export const NavLink = () => {
  return <h1>NavLink</h1>
}

export const NextLink = () => {
  return <h1>NextLink</h1>
}

export const NextNavLink = () => {
  return <h1>NextNavLink</h1>
}

// export const NavLink = styled(Link)(
//   appearanceNavLinkStyles,
//   defaultNavLinkStyles,
//   activeNavLinkStyles
// )
//
// export const NextLink: LinkProps = (props) => {
//   const NextLinkRenderer = useNextLink(BaseLink)
//   return <NextLinkRenderer {...props} />
// }
//
// export const NextNavLink: LinkProps = (props) => {
//   const NextNavLinkRenderer = useNextNavLink(NavLink)
//   return <NextNavLinkRenderer {...props} />
// }
