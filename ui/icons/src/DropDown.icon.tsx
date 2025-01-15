/* eslint-disable prefer-object-spread */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import type { IconProps } from '../icons.interfaces.js'

import { clsx }           from 'clsx'
import { memo }           from 'react'
import React              from 'react'

import { iconSprinkles }  from '../icon.css.js'

export const DropDownIcon = memo(({ color, ...props }: IconProps) => {
  const { className, style, otherProps } = iconSprinkles(props)
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      fill='none'
      viewBox='0 0 14 8'
      className={clsx(className, otherProps?.className)}
      style={Object.assign({}, style, otherProps.style)}
      {...props}
    >
      <path
        stroke='#252C32'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='m1 1 6 6 6-6'
      />
    </svg>
  )
})
