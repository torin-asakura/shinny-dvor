/* eslint-disable prefer-object-spread */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import type { IconProps } from '../icons.interfaces.js'

import { clsx }           from 'clsx'
import { memo }           from 'react'
import React              from 'react'

import { vars }           from '@ui/theme'

import { iconSprinkles }  from '../icon.css.js'

export const BackIcon = memo(({ color, ...props }: IconProps) => {
  const { className, style, otherProps } = iconSprinkles(props)
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      fill='none'
      viewBox='0 0 12 24'
      className={clsx(className, otherProps?.className)}
      style={Object.assign({}, style, otherProps.style)}
      {...props}
    >
      <path
        fill={vars.colors[color as keyof typeof vars.colors] || color || '#252C32'}
        fillRule='evenodd'
        d='M9.619 5.381a.875.875 0 0 1 0 1.238L4.237 12l5.382 5.381A.875.875 0 1 1 8.38 18.62l-6-6a.875.875 0 0 1 0-1.238l6-6a.875.875 0 0 1 1.238 0'
        clipRule='evenodd'
      />
    </svg>
  )
})
