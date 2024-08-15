import type { FC }                from 'react'
import type { PropsWithChildren } from 'react'

import type { TextProps }         from './text.interfaces.js'

import { Text as BaseText }       from '@atls-ui-parts/text'

export * from '@atls-ui-parts/text'

export const Text = BaseText as unknown as TextProps
