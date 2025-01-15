import type { FC }        from 'react'

import type { LogoProps } from './logo.interface.js'

import { memo }           from 'react'
import React              from 'react'

import { LogoIcon }       from '@ui/icons'
import { Box }            from '@ui/layout'
import { NextLink }       from '@ui/link'

export const Logo: FC<LogoProps> = memo(({ path, ...props }) => (
  <NextLink path={path}>
    <Box display={{ mobile: 'flex', tablet: 'flex', desktop: 'none' }}>
      <LogoIcon width={48} height={32} {...props} />
    </Box>
    <Box display={{ mobile: 'none', tablet: 'none', desktop: 'flex' }}>
      <LogoIcon width={60} height={40} {...props} />
    </Box>
  </NextLink>
))
