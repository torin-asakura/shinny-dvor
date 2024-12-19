import type { ResponsiveContainerProps } from '../responsive-container/index.js'

import { Column as BaseColumn }          from '@atls-ui-parts/layout'
import { forwardRef }                    from 'react'
import React                             from 'react'

import { PropsMapper }                   from '../mappers/props.mapper.js'
import { rainbowSprinkles }              from '../responsive-container/index.js'

export const Column = forwardRef<HTMLDivElement, ResponsiveContainerProps>((
  { children, ...props },
  ref
) => {
  const mappedProps = PropsMapper.sprinklesProps(props)
  const { className, style, otherProps } = rainbowSprinkles(mappedProps)

  return (
    <BaseColumn ref={ref} className={className} style={style} {...otherProps}>
      {children}
    </BaseColumn>
  )
})
