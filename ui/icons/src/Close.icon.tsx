/* eslint-disable prefer-object-spread */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import type { IconProps } from '../icons.interfaces.js'

import { clsx }           from 'clsx'
import { memo }           from 'react'
import React              from 'react'

import { vars }           from '@ui/theme'

import { iconSprinkles }  from '../icon.css.js'

export const CloseIcon = memo(({ color, ...props }: IconProps) => {
  const { className, style, otherProps } = iconSprinkles(props)
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      fill='none'
      viewBox='0 0 25 24'
      className={clsx(className, otherProps?.className)}
      style={Object.assign({}, style, otherProps.style)}
      {...props}
    >
      <path
        fill={vars.colors[color as keyof typeof vars.colors] || color || '#252C32'}
        fillRule='evenodd'
        d='M5.881 5.381a.875.875 0 0 1 1.238 0l5.381 5.382 5.381-5.382A.875.875 0 1 1 19.12 6.62L13.737 12l5.382 5.381a.875.875 0 1 1-1.238 1.238L12.5 13.237 7.119 18.62A.875.875 0 0 1 5.88 17.38L11.263 12 5.88 6.619a.875.875 0 0 1 0-1.238'
        clipRule='evenodd'
      />
    </svg>
  )
})
