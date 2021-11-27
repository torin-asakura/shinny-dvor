import React        from 'react'
import { FC }       from 'react'

import { NextLink } from '@ui/link'
import { Layout }   from '@ui/layout'

const Logo: FC = () => (
  <NextLink href='/'>
    <Layout>Logo</Layout>
  </NextLink>
)

export { Logo }
