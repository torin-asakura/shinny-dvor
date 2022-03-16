import React         from 'react'
import { FC }        from 'react'

import { NextLink }  from '@ui/link'
import { LogoIcon }  from '@ui/icons'
import { Box }       from '@ui/layout'

import { LogoProps } from './logo.interface'

const Logo: FC<LogoProps> = ({ ...props }) => (
  <NextLink path='/'>
    <Box display={['flex', 'none', 'none']}>
      <LogoIcon width={48} height={32} {...props} />
    </Box>
    <Box display={['none', 'flex', 'flex']}>
      <LogoIcon width={60} height={40} {...props} />
    </Box>
  </NextLink>
)

export { Logo }
