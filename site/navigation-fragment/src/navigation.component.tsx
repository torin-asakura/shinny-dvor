import React        from 'react'
import { FC }       from 'react'

import { Box }      from '@ui/layout'
import { Column }   from '@ui/layout'
import { Row }      from '@ui/layout'
import { Layout }   from '@ui/layout'
import { NextLink } from '@ui/link'
import { Text }     from '@ui/text'

const Navigation: FC = () => (
  <Box width='100%' border='1px solid blue'>
    <Row justifyContent='space-between' display={['none', 'flex', 'flex']}>
      <NextLink href='/'>
        <Layout>
          <Text>Услуги</Text>
        </Layout>
      </NextLink>
      <NextLink href='/'>
        <Layout>
          <Text>Прайслист</Text>
        </Layout>
      </NextLink>
      <NextLink href='/'>
        <Layout>
          <Text>Контакты</Text>
        </Layout>
      </NextLink>
      <NextLink href='/'>
        <Layout>
          <Text>Блог</Text>
        </Layout>
      </NextLink>
    </Row>
    <Column justifyContent='space-between' display={['flex', 'none', 'none']}>
      <NextLink href='/'>
        <Layout>
          <Text>Услуги</Text>
        </Layout>
      </NextLink>
      <Layout flexBasis={20} />
      <NextLink href='/'>
        <Layout>
          <Text>Прайслист</Text>
        </Layout>
      </NextLink>
      <Layout flexBasis={20} />
      <NextLink href='/'>
        <Layout>
          <Text>Контакты</Text>
        </Layout>
      </NextLink>
      <Layout flexBasis={20} />
      <NextLink href='/'>
        <Layout>
          <Text>Блог</Text>
        </Layout>
      </NextLink>
    </Column>
  </Box>
)

export { Navigation }
