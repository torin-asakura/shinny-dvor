/* eslint-disable prefer-object-spread */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import type { IconProps } from '../icons.interfaces.js'

import { clsx }           from 'clsx'
import { memo }           from 'react'
import React              from 'react'

import { vars }           from '@ui/theme'

import { iconSprinkles }  from '../icon.css.js'

export const MenuIcon = memo(({ color, ...props }: IconProps) => {
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
        fill={vars.colors[color as keyof typeof vars.colors] || color || '#fff'}
        fillRule='evenodd'
        d='M3.625 6c0-.483.392-.875.875-.875h16a.875.875 0 0 1 0 1.75h-16A.875.875 0 0 1 3.625 6m0 6c0-.483.392-.875.875-.875h16a.875.875 0 0 1 0 1.75h-16A.875.875 0 0 1 3.625 12m.875 5.125a.875.875 0 0 0 0 1.75h16a.875.875 0 0 0 0-1.75z'
        clipRule='evenodd'
      />
    </svg>
  )
})
