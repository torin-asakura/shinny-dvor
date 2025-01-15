import type { PropsWithChildren } from 'react'
import type { FC }                from 'react'

import type { BaseLinkProps }     from '../base-link/index.js'

import { memo }                   from 'react'
import React                      from 'react'

import { BaseLink }               from '../base-link/index.js'

export const Link: FC<PropsWithChildren<BaseLinkProps>> = memo((props) => <BaseLink {...props} />)
