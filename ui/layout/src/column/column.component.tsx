import type { FC }                       from 'react'
import type { PropsWithChildren }        from 'react'

import type { ResponsiveContainerProps } from '../responsive-container/index.js'

import { Column as BaseColumn }          from '@atls-ui-parts/layout'
import React                             from 'react'

import { PropsMapper }                   from '../mappers/props.mapper.js'
import { rainbowSprinkles }              from '../responsive-container/index.js'

export const Column: FC<PropsWithChildren<ResponsiveContainerProps>> = ({ children, ...props }) => {
  const mappedProps = PropsMapper.sprinklesProps(props)
  const { className, style, otherProps } = rainbowSprinkles(mappedProps)
  return (
    <BaseColumn className={className} style={style} {...otherProps}>
      {children}
    </BaseColumn>
  )
}
