import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces.js'

export const LogoIcon = (props: IconProps) => {
  const theme: any = useTheme()
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 61 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M16.4893 29.4118L22.7927 0H8.80413L2.5 29.4118H16.4893Z'
        fill={theme.colors[props.color || 0] || props.color || '#252C32'}
      />
      <path
        d='M32.099 40L38.4024 10.5882H24.4139L18.1098 40H32.099Z'
        fill={theme.colors[props.color || 0] || props.color || '#252C32'}
      />
      <path
        d='M52.1966 29.4118L58.5 0H44.5114L38.2073 29.4118H52.1966Z'
        fill={theme.colors[props.color || 0] || props.color || '#252C32'}
      />
    </svg>
  )
}
