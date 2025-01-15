/* eslint-disable prefer-object-spread */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import type { IconProps } from '../icons.interfaces.js'

import { clsx }           from 'clsx'
import { memo }           from 'react'
import React              from 'react'

import { iconSprinkles }  from '../icon.css.js'

export const ArrowRightIcon = memo(({ color, ...props }: IconProps) => {
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
        d='M.381.381a.875.875 0 0 1 1.238 0l6 6a.875.875 0 0 1 0 1.238l-6 6A.875.875 0 0 1 .38 12.38L5.763 7 .38 1.619a.875.875 0 0 1 0-1.238'
        clipRule='evenodd'
      />
    </svg>
  )
})
