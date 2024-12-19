import type { ResponsiveContainerProps } from '../responsive-container/index.js'

import { Layout as BaseLayout }          from '@atls-ui-parts/layout'

import React                             from 'react'
import { forwardRef }                    from 'react'

import { PropsMapper }                   from '../mappers/props.mapper.js'
import { rainbowSprinkles }              from '../responsive-container/index.js'

export const Layout = forwardRef<HTMLDivElement, ResponsiveContainerProps>((
  { children, ...props },
  ref
) => {
  const mappedProps = PropsMapper.sprinklesProps(props)
  const { className, style, otherProps } = rainbowSprinkles(mappedProps)

  return (
    <BaseLayout ref={ref} className={className} style={style} {...otherProps}>
      {children}
    </BaseLayout>
  )
})
