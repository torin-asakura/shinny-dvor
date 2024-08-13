import { createBaseStyles }        from '@atls-ui-parts/link'
import styled                      from '@emotion/styled'
import React                       from 'react'

import { Text }                    from '@ui/text'

import { createNextLink }          from './hooks/index.js'
import { createNextNavLink }       from './hooks/index.js'
import { activeNavLinkStyles }     from './next-nav-link.styles.js'
import { appearanceNavLinkStyles } from './next-nav-link.styles.js'
import { defaultNavLinkStyles }    from './next-nav-link.styles.js'

const BaseLink = styled(Text.withComponent('a'))<{ active: boolean; theme: any }>(
  createBaseStyles(),
  ({ active, theme }) => ({
    color: active ? theme.colors.darkBlue : theme.colors.black,
    borderBottom: active ? theme.borders.blue : '',
    paddingBottom: active ? '8px' : '',
  })
)

export const Link = (props) => <BaseLink {...props} />

export const NavLink = styled(Link)(
  appearanceNavLinkStyles,
  defaultNavLinkStyles,
  activeNavLinkStyles
)

export const NextLink = (props) => {
  const NextLinkRenderer = createNextLink(BaseLink)
  return <NextLinkRenderer {...props} />
}

export const NextNavLink = (props) => {
  const NextNavLinkRenderer = createNextNavLink(NavLink)
  return <NextNavLinkRenderer {...props} />
}
