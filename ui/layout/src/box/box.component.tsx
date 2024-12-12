import type { ResponsiveContainerProps } from '../responsive-container/index.js'
import type { FC }                       from 'react'
import type { PropsWithChildren }        from 'react'

import { Box as BaseBox }                from '@atls-ui-parts/layout'

import React                             from 'react'

import { PropsMapper }                   from '../mappers/props.mapper.js'
import { rainbowSprinkles }              from '../responsive-container/index.js'

export const Box: FC<PropsWithChildren<ResponsiveContainerProps>> = ({ children, ...props }) => {
  const mappedProps = PropsMapper.sprinklesProps(props)
  console.log(mappedProps)
  const { className, style, otherProps } = rainbowSprinkles(mappedProps)
  return (
    <BaseBox className={className} style={style} {...otherProps}>
      {children}
    </BaseBox>
  )
}
