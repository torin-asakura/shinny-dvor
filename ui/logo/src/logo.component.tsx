import React             from 'react'
import { FC }            from 'react'

import { NextLink }      from '@ui/link'
import { LogoIcon }      from '@ui/icons'
import { BlackLogoIcon } from '@ui/icons'
import { Condition }     from '@ui/condition'
import { Box }           from '@ui/layout'

import { LogoProps }     from './logo.interface'

const Logo: FC<LogoProps> = ({ pageStyle }) => (
  <NextLink href='/'>
    <Box alignItems='center'>
      <Condition match={pageStyle === 'dark'}>
        <LogoIcon />
      </Condition>
      <Condition match={pageStyle === 'light'}>
        <BlackLogoIcon />
      </Condition>
    </Box>
  </NextLink>
)

export { Logo }
