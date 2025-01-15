import type { LinkProps } from '../link.interfaces.js'

import React              from 'react'

import { BaseLink }       from '../base-link/index.js'
import { useNextLink }    from './hooks/index.js'

export const NextLink: LinkProps = (props) => {
  const NextLinkRenderer = useNextLink(BaseLink)
  return <NextLinkRenderer {...props} />
}
