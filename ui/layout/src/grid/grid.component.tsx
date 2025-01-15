import type { PropsWithChildren } from 'react'

import type { Sprinkles }         from './grid.css.js'

import { Box as BaseBox }         from '@atls-ui-parts/layout'
import { clsx }                   from 'clsx'
import { forwardRef }             from 'react'
import React                      from 'react'

import { rainbowSprinkles }       from './grid.css.js'
import { baseStyles }             from './grid.css.js'

export const Grid = forwardRef<HTMLDivElement, PropsWithChildren<Sprinkles>>((
  { children, ...props },
  ref
) => {
  const { className, style, otherProps } = rainbowSprinkles(props)

  return (
    <BaseBox ref={ref} className={clsx(baseStyles, className)} style={style} {...otherProps}>
      {children}
    </BaseBox>
  )
})
