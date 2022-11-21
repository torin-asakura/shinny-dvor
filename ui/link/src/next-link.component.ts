import styled               from '@emotion/styled'
import { createNextLink }   from '@atls-ui-parts/link'
import { createBaseStyles } from '@atls-ui-parts/link'

import { FC }               from 'react'

import { Text }             from '@ui/text'

import { LinkProps }        from './link.interfaces'
import { BaseLinkProps }    from './link.interfaces'
import { shapeLinkStyles }  from './link.styles'
import { activeLinkStyles } from './link.styles'
import { transitionStyles } from './link.styles'
import { appearanceStyles } from './styles'

const NextLinkStyles = styled(Text.withComponent('a'))<BaseLinkProps>(
  createBaseStyles(),
  appearanceStyles(),
  shapeLinkStyles,
  activeLinkStyles,
  transitionStyles
)

// @ts-ignore
const NextLink: FC<LinkProps> = createNextLink(NextLinkStyles)

export { NextLink }
