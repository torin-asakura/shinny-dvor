import type { DividerProps } from './divider.interfaces.js'

import { memo }              from 'react'
import React                 from 'react'

import { Box }               from '@ui/layout'

import { DEFAULT_COLOR }     from './divider.constants.js'
import { DEFAULT_DIRECTION } from './divider.constants.js'
import { DEFAULT_WEIGHT }    from './divider.constants.js'

export const Divider = memo(({
  direction = DEFAULT_DIRECTION,
  weight = DEFAULT_WEIGHT,
  color = DEFAULT_COLOR,
}: DividerProps) => {
  const isHorizontalDirection = direction === 'horizontal'
  const isVerticalDirection = direction === 'vertical'

  const width = isHorizontalDirection ? '100%' : weight
  const height = isVerticalDirection ? '100%' : weight

  return (
    <Box
      backgroundColor={color}
      flexDirection={isHorizontalDirection ? 'row' : 'column'}
      width={width}
      height={height}
    />
  )
})
