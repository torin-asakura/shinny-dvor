import { FC }                from 'react'
import { PropsWithChildren } from 'react'
import { memo }              from 'react'
import React                 from 'react'

import { BaseLinkProps }     from '../base-link/index.js'
import { BaseLink }          from '../base-link/index.js'

export const Link: FC<PropsWithChildren<BaseLinkProps>> = memo((props) => <BaseLink {...props} />)
