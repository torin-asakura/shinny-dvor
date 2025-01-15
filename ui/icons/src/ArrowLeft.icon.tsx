/* eslint-disable prefer-object-spread */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import type { IconProps } from '../icons.interfaces.js'

import { clsx }           from 'clsx'
import { memo }           from 'react'
import React              from 'react'

import { iconSprinkles }  from '../icon.css.js'

export const ArrowLeftIcon = memo(({ color, ...props }: IconProps) => {
  const { className, style, otherProps } = iconSprinkles(props)
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      fill='none'
      viewBox='0 0 8 14'
      className={clsx(className, otherProps?.className)}
      style={Object.assign({}, style, otherProps.style)}
      {...props}
    >
      <path
        fill='#7B838A'
        fillRule='evenodd'
        d='M7.619.381a.875.875 0 0 1 0 1.238L2.237 7l5.382 5.381A.875.875 0 1 1 6.38 13.62l-6-6a.875.875 0 0 1 0-1.238l6-6a.875.875 0 0 1 1.238 0'
        clipRule='evenodd'
      />
    </svg>
  )
})
