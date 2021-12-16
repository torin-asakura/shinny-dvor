import React               from 'react'
import { FC }              from 'react'

import { Box }             from '@ui/layout'
import { Button }          from '@ui/button'
import { ArrowDownIcon }   from '@ui/icons'
import { Text }            from '@ui/text'
import { Row }             from '@ui/layout'
import { Column }          from '@ui/layout'
import { Layout }          from '@ui/layout'
import { Divider }         from '@ui/divider'
import { NextLink }        from '@ui/link'
import { SocialLinksDark } from '@ui/social-links'

const Hero: FC = () => (
  <Box width='100%' justifyContent='center'>
    <Layout flexBasis={[20, 80, 80]} />
    <Column minWidth={['100%', '1280px', '1280px']}>
      <Layout flexBasis={[120, 267, 267]} />
      <Box width={['100%', '900px', '900px']} height={[240, 201, 201]}>
        <Layout>
          <Text fontSize='giant' fontWeight='bold' color='white'>
            Welcome text
          </Text>
        </Layout>
      </Box>
      <Layout flexBasis={32} />
      <NextLink href='/booking'>
        <Layout width={['100%', '180px', '180px']}>
          <Button>Button</Button>
        </Layout>
      </NextLink>
      <Layout flexBasis={[40, 48, 48]} />
      <Divider color='milkGray' />
      <Layout flexBasis={[20, 30, 30]} />
      <Row width='100%' justifyContent={['center', 'space-between', 'space-between']}>
        <Box width='100%' display={['none', 'flex', 'flex']} alignItems='center'>
          <Layout>
            <Text color='white' fontWeight='medium'>
              Scrollspy
            </Text>
            <Layout flexBasis={4} />
          </Layout>
          <Layout>
            <ArrowDownIcon width={20} height={20} />
          </Layout>
        </Box>
        <Box width='100%' alignItems='center'>
          <Box width='100%' justifyContent={['flex-start', 'flex-end', 'flex-end']}>
            <Layout>
              <Text color='white' fontWeight='medium'>
                Telephone
              </Text>
            </Layout>
          </Box>
          <Layout flexBasis={32} flexShrink={0} display={['none', 'flex', 'flex']} />
          <Box justifyContent='flex-end'>
            <SocialLinksDark />
          </Box>
        </Box>
      </Row>
      <Layout flexBasis={[20, 30, 30]} />
    </Column>
    <Layout flexBasis={[20, 80, 80]} />
  </Box>
)

export { Hero }
