import React              from 'react'
import { FC }             from 'react'

import { NextLink }       from '@ui/link'
import { FooterLogoIcon } from '@ui/icons'
import { Box }            from '@ui/layout'

const FooterLogo: FC = () => (
  <NextLink path='/'>
    <Box display={['flex', 'none', 'none']}>
      <FooterLogoIcon width={148} height={48} />
    </Box>
    <Box display={['none', 'flex', 'flex']}>
      <FooterLogoIcon width={198} height={64} />
    </Box>
  </NextLink>
)

export { FooterLogo }
