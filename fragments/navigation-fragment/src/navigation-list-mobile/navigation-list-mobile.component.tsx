import React           from 'react'
import { FC }          from 'react'

import { Box }         from '@ui/layout'
import { Row }         from '@ui/layout'
import { Layout }      from '@ui/layout'
import { Column }      from '@ui/layout'
import { NextNavLink } from '@ui/link'
import { Text }        from '@ui/text'

const NavigationListMobile: FC = () => (
  <Box backgroundColor='white'>
    <Layout flexBasis={20} flexShrink={0} />
    <Column>
      <Row>
        <NextNavLink path='/services'>
          <Text fontWeight='medium'>services</Text>
        </NextNavLink>
      </Row>
      <Layout flexBasis={24} />
      <Row>
        <NextNavLink path='/contacts'>
          <Text fontWeight='medium'>contacts</Text>
        </NextNavLink>
      </Row>
      <Layout flexBasis={24} />
      <Row>
        <NextNavLink path='/blog'>
          <Text fontWeight='medium'>blog</Text>
        </NextNavLink>
      </Row>
      <Layout flexBasis={32} />
    </Column>
    <Layout flexBasis={20} flexShrink={0} />
  </Box>
)

export { NavigationListMobile }
