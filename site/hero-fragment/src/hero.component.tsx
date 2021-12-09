import React        from 'react'
import { FC }       from 'react'

import { Box }      from '@ui/layout'
import { Button }   from '@ui/button'
import { Text }     from '@ui/text'
import { Row }      from '@ui/layout'
import { Column }   from '@ui/layout'
import { Layout }   from '@ui/layout'
import { Divider }  from '@ui/divider'
import { NextLink } from '@ui/link'

const Hero: FC = () => (
  <Box width='100%'>
    <Row>
      <Layout flexBasis={[20, 80, 80]} />
      <Column width='100%'>
        <Layout flexBasis={[120, 267, 267]} />
        <Box width={['100%', '900px', '900px']} height={[240, 201, 201]} border='1px solid orange'>
          <Layout>
            <Text fontSize='giant' fontWeight='bold'>
              Welcome text
            </Text>
          </Layout>
        </Box>
        <Layout flexBasis={32} />
        <NextLink href='/booking'>
          <Box border='1px solid orange' width={['100%', '180px', '180px']} height={48}>
            <Button>Button</Button>
          </Box>
        </NextLink>
        <Layout flexBasis={[40, 48, 48]} />
        <Divider />
        <Layout flexBasis={[20, 30, 30]} />
        <Row width='100%' justifyContent={['center', 'space-between', 'space-between']}>
          <Box width='100%' border='1px solid orange' display={['none', 'flex', 'flex']}>
            Text
          </Box>
          <Box width='100%' border='1px solid orange'>
            <Box width='100%' justifyContent={['flex-start', 'flex-end', 'flex-end']}>
              Telephone
            </Box>
            <Layout flexBasis={32} display={['none', 'flex', 'flex']} />
            <Box justifyContent='flex-end'>Social</Box>
          </Box>
        </Row>
        <Layout flexBasis={[20, 30, 30]} />
      </Column>
      <Layout flexBasis={[20, 80, 80]} />
    </Row>
  </Box>
)

export { Hero }
