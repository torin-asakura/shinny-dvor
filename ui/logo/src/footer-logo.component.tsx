import type { FC }        from 'react'

import type { LogoProps } from './logo.interface.js'

import React              from 'react'

import { FooterLogoIcon } from '@ui/icons'
import { Box }            from '@ui/layout'
import { Link }           from '@ui/link'

export const FooterLogo: FC<LogoProps> = ({ path }) => (
  <Link href={path}>
    <Box display={{ mobile: 'flex', tablet: 'flex', desktop: 'none' }}>
      <FooterLogoIcon width={148} height={48} />
    </Box>
    <Box display={{ mobile: 'none', tablet: 'none', desktop: 'flex' }}>
      <FooterLogoIcon width={198} height={64} />
    </Box>
  </Link>
)
