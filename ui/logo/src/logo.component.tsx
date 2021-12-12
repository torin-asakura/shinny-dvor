import React         from 'react'
import { FC }        from 'react'

import { NextLink }  from '@ui/link'
import { LogoIcon }  from '@ui/icons'
import { Box }       from '@ui/layout'

import { LogoProps } from './logo.interface'

const Logo: FC<LogoProps> = ({ pageStyle }) => (
  <NextLink href='/'>
    <Box display={['flex', 'none', 'none']}>
      <LogoIcon width={48} height={32} color={pageStyle === 'dark' ? 'white' : 'black'} />
    </Box>
    <Box display={['none', 'flex', 'flex']}>
      <LogoIcon width={60} height={40} color={pageStyle === 'dark' ? 'white' : 'black'} />
    </Box>
  </NextLink>
)

export { Logo }
