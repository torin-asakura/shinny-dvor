import type { FC }                  from 'react'
import type { PropsWithChildren }   from 'react'

import type { ResponsiveTextProps } from '../responsive-text/index.js'

import { Text as BaseText }         from '@atls-ui-parts/text'
import React                        from 'react'

import { PropsMapper }              from '../mappers/props.mapper.js'
import { rainbowSprinkles }         from '../responsive-text/index.js'

export const Text: FC<PropsWithChildren<ResponsiveTextProps>> = ({ children, ...props }) => {
  const mappedProps = PropsMapper.sprinklesProps(props)
  const { className, style, otherProps } = rainbowSprinkles(mappedProps)
  return (
    <BaseText className={className} style={style} {...otherProps}>
      {children}
    </BaseText>
  )
}
