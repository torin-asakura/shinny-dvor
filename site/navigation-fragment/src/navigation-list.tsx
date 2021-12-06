import React        from 'react'
import { FC }       from 'react'

import { Box }      from '@ui/layout'
import { Layout }   from '@ui/layout'
import { NextLink } from '@ui/link'
import { Text }     from '@ui/text'

const NavigationList: FC = () => (
  <Box width='100%' border='1px solid orange' justifyContent='space-between' flexWrap='wrap'>
    <NextLink href='/services'>
      <Layout>
        <Text>Услуги</Text>
      </Layout>
    </NextLink>
    <NextLink href='/prices'>
      <Layout>
        <Text>Прайс лист</Text>
      </Layout>
    </NextLink>
    <NextLink href='/contacts'>
      <Layout>
        <Text>Контакты</Text>
      </Layout>
    </NextLink>
    <NextLink href='/blog'>
      <Layout>
        <Text>Блог</Text>
      </Layout>
    </NextLink>
  </Box>
)

export { NavigationList }
