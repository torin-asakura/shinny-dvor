import React           from 'react'
import { FC }          from 'react'

import { Box }         from '@ui/layout'
import { Layout }      from '@ui/layout'
import { NextNavLink } from '@ui/link'
import { Text }        from '@ui/text'

const NavigationList: FC = () => (
  <Box width='100%' justifyContent='space-between' flexWrap='wrap'>
    <Layout>
      <NextNavLink path='/services'>
        <Text fontWeight='medium'>services</Text>
      </NextNavLink>
    </Layout>
    <Layout>
      <NextNavLink path='/contacts'>
        <Text fontWeight='medium'>contacts</Text>
      </NextNavLink>
    </Layout>
    <Layout>
      <NextNavLink path='/blog'>
        <Text fontWeight='medium'>blog</Text>
      </NextNavLink>
    </Layout>
  </Box>
)

export { NavigationList }
