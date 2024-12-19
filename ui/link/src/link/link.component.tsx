import { memo }      from 'react'
import React         from 'react'

import { BaseLink }  from '../base-link/index.js'
import { LinkProps } from '../link.interfaces.js'

export const Link = memo((props: LinkProps) => <BaseLink {...props} />)
