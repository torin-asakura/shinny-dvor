import React           from 'react'
import { FC }          from 'react'

import { Box }         from '@ui/layout'
import { Layout }      from '@ui/layout'
import { Column }      from '@ui/layout'
import { NextNavLink } from '@ui/link'
import { Text }        from '@ui/text'

const NavigationListMobile: FC = () => (
  <Box backgroundColor='white'>
    <Layout flexBasis={20} flexShrink={0} />
    <Column>
      <NextNavLink path='/services'>
        <Text fontWeight='medium'>services</Text>
      </NextNavLink>
      <Layout flexBasis={24} />
      <NextNavLink path='/contacts'>
        <Text fontWeight='medium'>contacts</Text>
      </NextNavLink>
      <Layout flexBasis={24} />
      <NextNavLink path='/blog'>
        <Text fontWeight='medium'>blog</Text>
      </NextNavLink>
      <Layout flexBasis={32} />
    </Column>
    <Layout flexBasis={20} flexShrink={0} />
  </Box>
)

export { NavigationListMobile }
