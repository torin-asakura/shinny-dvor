/* eslint-disable prefer-object-spread */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import type { IconProps } from '../icons.interfaces.js'

import { clsx }           from 'clsx'
import { memo }           from 'react'
import React              from 'react'

import { iconSprinkles }  from '../icon.css.js'

export const CheckIcon = memo(({ color, ...props }: IconProps) => {
  const { className, style, otherProps } = iconSprinkles(props)
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      fill='none'
      viewBox='0 0 24 24'
      className={clsx(className, otherProps?.className)}
      style={Object.assign({}, style, otherProps.style)}
      {...props}
    >
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M21.207 5.793a1 1 0 0 1 0 1.414l-11 11a1 1 0 0 1-1.414 0l-5.5-5.5a1 1 0 1 1 1.414-1.414L9.5 16.086 19.793 5.793a1 1 0 0 1 1.414 0'
        clipRule='evenodd'
      />
    </svg>
  )
})
