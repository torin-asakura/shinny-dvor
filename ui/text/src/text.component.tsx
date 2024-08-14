import type { TextProps }         from './text.interfaces.js'
import type { FC }                from 'react'
import type { PropsWithChildren } from 'react'

import { Text as BaseText }       from '@atls-ui-parts/text'

import React                      from 'react'

export * from '@atls-ui-parts/text'

export const Text: FC<PropsWithChildren<TextProps>> = (props) => <BaseText {...props} />
