import type { FC }        from 'react'

import type { LogoProps } from './logo.interface.js'

import { memo }           from 'react'
import React              from 'react'

import { FooterLogoIcon } from '@ui/icons'
import { Box }            from '@ui/layout'
import { NextLink }       from '@ui/link'

export const FooterLogo: FC<LogoProps> = memo(({ path }) => (
  <NextLink path={path}>
    <Box display={{ mobile: 'flex', tablet: 'flex', desktop: 'none' }}>
      <FooterLogoIcon width={148} height={48} />
    </Box>
    <Box display={{ mobile: 'none', tablet: 'none', desktop: 'flex' }}>
      <FooterLogoIcon width={198} height={64} />
    </Box>
  </NextLink>
))
