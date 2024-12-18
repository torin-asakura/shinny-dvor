import type { FC }                       from 'react'
import type { PropsWithChildren }        from 'react'

import type { ResponsiveContainerProps } from '../responsive-container/index.js'

import { Row as BaseRow }                from '@atls-ui-parts/layout'
import React                             from 'react'

import { PropsMapper }                   from '../mappers/props.mapper.js'
import { rainbowSprinkles }              from '../responsive-container/index.js'

export const Row: FC<PropsWithChildren<ResponsiveContainerProps>> = ({
  passref,
  children,
  ...props
}) => {
  const mappedProps = PropsMapper.sprinklesProps(props)
  const { className, style, otherProps } = rainbowSprinkles(mappedProps)

  return (
    <BaseRow ref={passref} className={className} style={style} {...otherProps}>
      {children}
    </BaseRow>
  )
}
