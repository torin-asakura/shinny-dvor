import type { FC }        from 'react'

import type { LogoProps } from './logo.interface.js'

import React              from 'react'

import { FooterLogoIcon } from '@ui/icons'
import { Box }            from '@ui/layout'
import { NextLink }       from '@ui/link'

export const FooterLogo = () => {
  return <h1>FooterLogo</h1>
}

// export const FooterLogo: FC<LogoProps> = ({ path }) => (
//   <NextLink path={path}>
//     <Box display={['flex', 'flex', 'none']}>
//       <FooterLogoIcon width={148} height={48} />
//     </Box>
//     <Box display={['none', 'none', 'flex']}>
//       <FooterLogoIcon width={198} height={64} />
//     </Box>
//   </NextLink>
// )
