import React        from 'react'
import { FC }       from 'react'

import { NextLink } from '@ui/link'
import { LogoIcon } from '@ui/icons'
import { Box }      from '@ui/layout'

const Logo: FC = () => (
  <NextLink href='/'>
    <Box alignItems='center'>
      <LogoIcon />
    </Box>
  </NextLink>
)

export { Logo }
