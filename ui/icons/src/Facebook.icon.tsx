/* eslint-disable prefer-object-spread */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import type { IconProps } from '../icons.interfaces.js'

import { clsx }           from 'clsx'
import { memo }           from 'react'
import React              from 'react'

import { vars }           from '@ui/theme'

import { iconSprinkles }  from '../icon.css.js'

export const FacebookIcon = memo(({ color, ...props }: IconProps) => {
  const { className, style, otherProps } = iconSprinkles(props)
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      fill='none'
      viewBox='0 0 10 20'
      className={clsx(className, otherProps?.className)}
      style={Object.assign({}, style, otherProps.style)}
      {...props}
    >
      <path
        fill={vars.colors[color as keyof typeof vars.colors] || color || '#252C32'}
        d='M6.429 20v-9.262h2.857L10 7.158H6.429V5.728q0-2.148 2.142-2.148H10V0H7.143C4.518 0 2.857 2.062 2.857 5.011v2.148H0v3.579h2.857V20z'
      />
    </svg>
  )
})
