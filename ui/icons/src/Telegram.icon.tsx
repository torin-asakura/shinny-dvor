/* eslint-disable prefer-object-spread */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import type { IconProps } from '../icons.interfaces.js'

import { clsx }           from 'clsx'
import { memo }           from 'react'
import React              from 'react'

import { vars }           from '@ui/theme'

import { iconSprinkles }  from '../icon.css.js'

export const TelegramIcon = memo(({ color, ...props }: IconProps) => {
  const { className, style, otherProps } = iconSprinkles(props)
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={clsx(className, otherProps?.className)}
      style={Object.assign({}, style, otherProps.style)}
      {...props}
    >
      <path
        d='M6.02681 8.17556C5.12524 8.5692 4.19891 8.97368 3.35184 9.44025C2.90954 9.7641 3.49739 9.99319 4.04891 10.2081L4.05017 10.2086C4.13742 10.2425 4.22372 10.2762 4.30489 10.3098C4.37276 10.3307 4.44176 10.3526 4.5117 10.3749C5.12509 10.5703 5.80901 10.7882 6.40451 10.4604C7.38274 9.8985 8.30587 9.24885 9.22834 8.59969C9.53055 8.38699 9.83269 8.17436 10.1367 7.96489L10.1846 7.93399C10.4435 7.7661 11.0259 7.38859 10.8105 7.90879C10.3015 8.46536 9.75643 8.95808 9.20837 9.45347L9.20681 9.45487C8.83706 9.78904 8.46596 10.1244 8.10371 10.4814C7.78822 10.7378 7.46059 11.2533 7.81388 11.6123C8.62657 12.1812 9.45194 12.7363 10.2768 13.2912L10.28 13.2933C10.5487 13.474 10.8175 13.6548 11.0857 13.836C11.5402 14.1989 12.2507 13.9053 12.3506 13.3382C12.3941 13.0828 12.4378 12.8274 12.4815 12.572L12.4843 12.5556C12.7309 11.1138 12.9776 9.67151 13.1955 8.22506C13.2251 7.99815 13.2587 7.77127 13.2923 7.54429C13.3737 6.99412 13.4552 6.44329 13.4807 5.89016C13.4151 5.33816 12.7458 5.45955 12.3733 5.58367C10.4589 6.31215 8.56354 7.09462 6.67571 7.8909C6.46185 7.98563 6.24506 8.08028 6.02681 8.17556Z'
        fill={vars.colors[color as keyof typeof vars.colors] || color || '#252C32'}
      />
    </svg>
  )
})
