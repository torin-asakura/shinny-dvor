import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces.js'

export const CheckIcon = (props: IconProps) => {
  const theme: any = useTheme()
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M21.2071 5.79289C21.5976 6.18342 21.5976 6.81658 21.2071 7.20711L10.2071 18.2071C9.81658 18.5976 9.18342 18.5976 8.79289 18.2071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929C3.68342 10.9024 4.31658 10.9024 4.70711 11.2929L9.5 16.0858L19.7929 5.79289C20.1834 5.40237 20.8166 5.40237 21.2071 5.79289Z'
        fill='white'
      />
    </svg>
  )
}
