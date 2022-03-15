import React                 from 'react'
import styled                from '@emotion/styled'

import { createBaseStyles }  from '@atls-ui-parts/link'
import { createNextLink }    from '@atls-ui-parts/link'
import { createNextNavLink } from '@atls-ui-parts/link'
import { Text }              from '@atls-ui-proto/text'

export default {
  title: 'Components/Link',
}

const BaseLink = styled(Text.withComponent('a'))<{ active: boolean }>(
  createBaseStyles(),
  ({ active }) => ({
    color: active ? 'blue' : 'black',
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
