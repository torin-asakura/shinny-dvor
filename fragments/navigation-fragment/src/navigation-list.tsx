import React        from 'react'
import { FC }       from 'react'

import { Box }      from '@ui/layout'
import { Layout }   from '@ui/layout'
import { NextLink } from '@ui/link'
import { Text }     from '@ui/text'

const NavigationList: FC = () => (
  <Box width='100%' justifyContent='space-between' flexWrap='wrap'>
    <NextLink href='/services'>
      <Layout>
        <Text color='white'>Услуги</Text>
      </Layout>
    </NextLink>
    <NextLink href='/prices'>
      <Layout>
        <Text color='white'>Прайс лист</Text>
      </Layout>
    </NextLink>
    <NextLink href='/contacts'>
      <Layout>
        <Text color='white'>Контакты</Text>
      </Layout>
    </NextLink>
    <NextLink href='/blog'>
      <Layout>
        <Text color='white'>Блог</Text>
      </Layout>
    </NextLink>
  </Box>
)

export { NavigationList }
