import React         from 'react'
import { FC }        from 'react'

import { NextLink }  from '@ui/link'
import { LogoIcon }  from '@ui/icons'
import { Box }       from '@ui/layout'

import { LogoProps } from './logo.interface'

const Logo: FC<LogoProps> = ({ pageStyle }) => (
  <NextLink href='/'>
    <Box alignItems='center' width={[48, 60, 60]} height={[32, 40, 40]}>
      <LogoIcon
        width={['48px', '60px', '60px']}
        height={['32px', '40px', '40px']}
        color={pageStyle === 'dark' ? 'white' : 'black'}
      />
    </Box>
  </NextLink>
)

export { Logo }
