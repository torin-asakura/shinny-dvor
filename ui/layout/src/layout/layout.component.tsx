import type { FC }                       from 'react'
import type { PropsWithChildren }        from 'react'

import type { ResponsiveContainerProps } from '../responsive-container/index.js'

import { Layout as BaseLayout }          from '@atls-ui-parts/layout'
import React                             from 'react'

import { PropsMapper }                   from '../mappers/props.mapper.js'
import { rainbowSprinkles }              from '../responsive-container/index.js'

export const Layout: FC<PropsWithChildren<ResponsiveContainerProps>> = ({ children, ...props }) => {
  const mappedProps = PropsMapper.sprinklesProps(props)
  const { className, style, otherProps } = rainbowSprinkles(mappedProps)
  return (
    <BaseLayout className={className} style={style} {...otherProps}>
      {children}
    </BaseLayout>
  )
}
