import type { FC }        from 'react'

import type { LogoProps } from './logo.interface.js'

import React              from 'react'

import { LogoIcon }       from '@ui/icons'
import { Box }            from '@ui/layout'
import { NextLink }       from '@ui/link'

export const Logo = () => {
  return <h1>Logo</h1>
}

// export const Logo: FC<LogoProps> = ({ path, ...props }) => (
//   <NextLink path={path}>
//     <Box display={['flex', 'flex', 'none']}>
//       <LogoIcon width={48} height={32} {...props} />
//     </Box>
//     <Box display={['none', 'none', 'flex']}>
//       <LogoIcon width={60} height={40} {...props} />
//     </Box>
//   </NextLink>
// )
