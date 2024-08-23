import type { FC }    from 'react'

import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces.js'

export const BackIcon: FC<IconProps> = (props) => {
  const theme: any = useTheme()
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 12 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9.61872 5.38128C9.96043 5.72299 9.96043 6.27701 9.61872 6.61872L4.23744 12L9.61872 17.3813C9.96043 17.723 9.96043 18.277 9.61872 18.6187C9.27701 18.9604 8.72299 18.9604 8.38128 18.6187L2.38128 12.6187C2.03957 12.277 2.03957 11.723 2.38128 11.3813L8.38128 5.38128C8.72299 5.03957 9.27701 5.03957 9.61872 5.38128Z'
        fill={theme.colors[props.color || 0] || props.color || '#252C32'}
      />
    </svg>
  )
}
