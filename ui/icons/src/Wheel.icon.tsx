/* eslint-disable prefer-object-spread */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import type { IconProps } from '../icons.interfaces.js'

import { clsx }           from 'clsx'
import { memo }           from 'react'
import React              from 'react'

import { vars }           from '@ui/theme'

import { iconSprinkles }  from '../icon.css.js'

export const WheelIcon = memo(({ color, ...props }: IconProps) => {
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
        fill={vars.colors[color as keyof typeof vars.colors] || color || '#252C32'}
        fillRule='evenodd'
        d='M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12m0-3.656a8.3 8.3 0 0 0 2.757-.466.36.36 0 0 0 .187-.524l-1.97-3.414a1.125 1.125 0 0 0-1.949 0l-1.969 3.414a.36.36 0 0 0 .187.524 8.3 8.3 0 0 0 2.757.466m7.84-7.219c.227 0 .402.2.36.424a8.34 8.34 0 0 1-2.761 4.779.36.36 0 0 1-.548-.1l-1.97-3.416a1.125 1.125 0 0 1 .975-1.687zM16.89 5.773a.36.36 0 0 1 .548-.1A8.34 8.34 0 0 1 20.2 10.45a.36.36 0 0 1-.36.424h-3.944a1.125 1.125 0 0 1-.975-1.687zM12.975 8.06l1.969-3.413a.36.36 0 0 0-.187-.525A8.3 8.3 0 0 0 12 3.656a8.3 8.3 0 0 0-2.757.466.36.36 0 0 0-.187.525l1.97 3.413c.433.75 1.515.75 1.949 0M4.16 10.875a.36.36 0 0 1-.36-.424A8.34 8.34 0 0 1 6.56 5.672a.36.36 0 0 1 .548.1l1.97 3.416a1.125 1.125 0 0 1-.975 1.687zm2.949 7.352a.36.36 0 0 1-.548.1A8.34 8.34 0 0 1 3.8 13.549a.36.36 0 0 1 .36-.423h3.944c.866 0 1.407.937.975 1.687zM12 14.344a2.344 2.344 0 1 0 0-4.688 2.344 2.344 0 0 0 0 4.688'
        clipRule='evenodd'
      />
    </svg>
  )
})
