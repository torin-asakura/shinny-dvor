import styled                      from '@emotion/styled'
import { createBaseStyles }        from '@atls-ui-parts/link'

import React                       from 'react'
import { default as BaseNextLink } from 'next/link'

import { Text }                    from '@ui/text'

// import { createNextLink }          from '@atls-ui-parts/link'
// import { createNextNavLink }       from '@atls-ui-parts/link'
import { createNextLink }          from './create-next-link.hook.js'
import { createNextNavLink }       from './create-next-nav-link.hook.js'
import { activeNavLinkStyles }     from './next-nav-link.styles'
import { appearanceNavLinkStyles } from './next-nav-link.styles'
import { defaultNavLinkStyles }    from './next-nav-link.styles'

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
  // TODO проверить.
  // 	смотрю в навигации, она использует другой компонент
  // найти компонент, который использует этот компонент и проверить

  const NextLinkRenderer = createNextLink(BaseLink)
  return <NextLinkRenderer {...props} />

  // return <BaseNextLink {...props} href='' />
}

// TODO to use it with app router
// needs to change 'next/router' to 'next/navigation' package
export const NextNavLink = (props) => {
  const NextNavLinkRenderer = createNextNavLink(NavLink)
  return <NextNavLinkRenderer {...props} />

  // return <BaseNextLink {...props} href='' />
}
