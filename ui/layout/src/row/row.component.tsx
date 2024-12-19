import type { ResponsiveContainerProps } from '../responsive-container/index.js'
import type { FC }                       from 'react'
import type { PropsWithChildren }        from 'react'

import { Row as BaseRow }                from '@atls-ui-parts/layout'

import React                             from 'react'
import { forwardRef }                    from 'react'

import { PropsMapper }                   from '../mappers/props.mapper.js'
import { rainbowSprinkles }              from '../responsive-container/index.js'

export const Row = forwardRef<HTMLDivElement, ResponsiveContainerProps>((
  { children, ...props },
  ref
) => {
  const mappedProps = PropsMapper.sprinklesProps(props)
  const { className, style, otherProps } = rainbowSprinkles(mappedProps)

  return (
    <BaseRow ref={ref} className={className} style={style} {...otherProps}>
      {children}
    </BaseRow>
  )
})
