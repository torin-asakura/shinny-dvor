import React        from 'react'
import { FC }       from 'react'

import { Column }   from '@ui/layout'
import { Row }      from '@ui/layout'
import { Button }   from '@ui/button'
import { Layout }   from '@ui/layout'
import { Box }      from '@ui/layout'
import { Text }     from '@ui/text'
import { NextLink } from '@ui/link'

const Success: FC = () => (
  <Box width='100%' border='1px solid blue'>
    <Row>
      <Layout flexBasis={[20, 360, 360]} />
      <Column width='100%'>
        <Layout flexBasis={[40, 44, 44]} />
        <Layout>
          <Text>Успешно</Text>
        </Layout>
        <Layout flexBasis={24} />
        <Layout>
          <Text>Text</Text>
        </Layout>
        <Layout flexBasis={32} />
        <NextLink href='/'>
          <Button color='secondary'>Button</Button>
        </NextLink>
        <Layout flexBasis={[48, 128, 128]} />
      </Column>
      <Layout flexBasis={[20, 360, 360]} />
    </Row>
  </Box>
)

export { Success }
