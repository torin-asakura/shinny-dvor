/* eslint-disable prefer-object-spread */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import type { IconProps } from '../icons.interfaces.js'

import { clsx }           from 'clsx'
import { memo }           from 'react'
import React              from 'react'

import { iconSprinkles }  from '../icon.css.js'

export const ArrowDownIcon = memo(({ color, ...props }: IconProps) => {
  const { className, style, otherProps } = iconSprinkles(props)
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      fill='none'
      viewBox='0 0 20 20'
      className={clsx(className, otherProps?.className)}
      style={Object.assign({}, style, otherProps.style)}
      {...props}
    >
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M10 3.25a.75.75 0 0 1 .75.75v10.19l2.72-2.72a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 1 1 1.06-1.06l2.72 2.72V4a.75.75 0 0 1 .75-.75'
        clipRule='evenodd'
      />
    </svg>
  )
})
