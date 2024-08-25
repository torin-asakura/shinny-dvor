import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces.js'

export const FacebookIcon = (props: IconProps) => {
  const theme: any = useTheme()
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 10 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M6.42857 20V10.7378H9.28572L10 7.15852H6.42857V5.72682C6.42857 4.29511 7.14429 3.57926 8.57143 3.57926H10V0H7.14286C4.51786 0 2.85714 2.06237 2.85714 5.01096V7.15852H0V10.7378H2.85714V20H6.42857Z'
        fill={theme.colors[props.color || 0] || props.color || '#252C32'}
      />
    </svg>
  )
}
