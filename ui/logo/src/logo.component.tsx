import React        from 'react'
import { FC }       from 'react'

import { NextLink } from '@ui/link'
import { Box }      from '@ui/layout'

const Logo: FC = () => (
  <NextLink href='/'>
    <Box border='1px solid black' height={32} width={48} alignItems='center'>
      Logo
    </Box>
  </NextLink>
)

export { Logo }
