import { useTheme } from '@emotion/react'

import React        from 'react'

const CrossIcon = ({ color }) => {
  const theme: any = useTheme()

  return (
    <svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M1 1L9 9M17 17L9 9M17 1L9 9M1 17L9 9'
        stroke={theme.colors[color]}
        strokeWidth='1.25'
      />
    </svg>
  )
}

export { CrossIcon }
