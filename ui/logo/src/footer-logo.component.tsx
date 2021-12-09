import React              from 'react'
import { FC }             from 'react'

import { NextLink }       from '@ui/link'
import { FooterLogoIcon } from '@ui/icons'

const FooterLogo: FC = () => (
  <NextLink href='/'>
    <FooterLogoIcon />
  </NextLink>
)

export { FooterLogo }
