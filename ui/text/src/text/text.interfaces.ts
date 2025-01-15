import type { TextProps as BaseTextProps } from '@atls-ui-parts/text'
import type { FC }                         from 'react'
import type { PropsWithChildren }          from 'react'

export interface ExtendedTextProps extends BaseTextProps {
  wordWrap?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  color?: any
}

export type TextProps = FC<PropsWithChildren<ExtendedTextProps>>
