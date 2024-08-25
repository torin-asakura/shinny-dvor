import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces.js'

export const MenuIcon = (props: IconProps) => {
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
        d='M3.625 6C3.625 5.51675 4.01675 5.125 4.5 5.125H20.5C20.9832 5.125 21.375 5.51675 21.375 6C21.375 6.48325 20.9832 6.875 20.5 6.875H4.5C4.01675 6.875 3.625 6.48325 3.625 6ZM3.625 12C3.625 11.5168 4.01675 11.125 4.5 11.125H20.5C20.9832 11.125 21.375 11.5168 21.375 12C21.375 12.4832 20.9832 12.875 20.5 12.875H4.5C4.01675 12.875 3.625 12.4832 3.625 12ZM4.5 17.125C4.01675 17.125 3.625 17.5168 3.625 18C3.625 18.4832 4.01675 18.875 4.5 18.875H20.5C20.9832 18.875 21.375 18.4832 21.375 18C21.375 17.5168 20.9832 17.125 20.5 17.125H4.5Z'
        fill={theme.colors[props.color || 0] || props.color || 'white'}
      />
    </svg>
  )
}
