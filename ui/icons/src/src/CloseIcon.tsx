import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces.js'

export const CloseIcon = (props: IconProps) => {
  const theme: any = useTheme()
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 25 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M5.88128 5.38128C6.22299 5.03957 6.77701 5.03957 7.11872 5.38128L12.5 10.7626L17.8813 5.38128C18.223 5.03957 18.777 5.03957 19.1187 5.38128C19.4604 5.72299 19.4604 6.27701 19.1187 6.61872L13.7374 12L19.1187 17.3813C19.4604 17.723 19.4604 18.277 19.1187 18.6187C18.777 18.9604 18.223 18.9604 17.8813 18.6187L12.5 13.2374L7.11872 18.6187C6.77701 18.9604 6.22299 18.9604 5.88128 18.6187C5.53957 18.277 5.53957 17.723 5.88128 17.3813L11.2626 12L5.88128 6.61872C5.53957 6.27701 5.53957 5.72299 5.88128 5.38128Z'
        fill={theme.colors[props.color || 0] || props.color || '#252C32'}
      />
    </svg>
  )
}
