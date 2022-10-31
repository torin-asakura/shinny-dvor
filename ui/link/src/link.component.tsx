import styled                from '@emotion/styled'
import { createBaseStyles }  from '@atls-ui-parts/link'
import { createNextLink }    from '@atls-ui-parts/link'
import { createNextNavLink } from '@atls-ui-parts/link'

import React                 from 'react'

import { Text }              from '@ui/text'

const BaseLink = styled(Text.withComponent('a'))<{ active: boolean; theme: any }>(
  createBaseStyles(),
  ({ active, theme }) => ({
    color: active ? theme.colors.darkBlue : theme.colors.black,
    borderBottom: active ? theme.borders.blue : '',
    paddingBottom: active ? '8px' : '',
  })
)

export const Link = (props) => <BaseLink {...props} />

export const NextLink = (props) => {
  const NextLinkRenderer = createNextLink(BaseLink)
  return <NextLinkRenderer {...props} />
}

export const NextNavLink = (props) => {
  const NextNavLinkRenderer = createNextNavLink(BaseLink)
  return <NextNavLinkRenderer {...props} />
}
