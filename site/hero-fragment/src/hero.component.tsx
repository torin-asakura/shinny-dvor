import React               from 'react'
import { FC }              from 'react'

import { Box }             from '@ui/layout'
import { Button }          from '@ui/button'
import { ArrowDownIcon }   from '@ui/icons'
import { Text }            from '@ui/text'
import { Row }             from '@ui/layout'
import { Column }          from '@ui/layout'
import { Layout }          from '@ui/layout'
import { Link }            from '@ui/link'
import { Divider }         from '@ui/divider'
import { NextLink }        from '@ui/link'
import { SocialLinksDark } from '@ui/social-links'

const Hero: FC = () => (
  <Box minWidth={['100%', '1440px', '1440px']} justifyContent='center'>
    <Layout flexBasis={[20, 80, 80]} />
    <Column width='100%'>
      <Layout flexBasis={[120, 267, 367]} />
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
          <Link href={'#services'}>
            <Layout>
              <Text color='white' fontWeight='medium' fontFamily='primary'>
                Scrollspy
              </Text>
              <Layout flexBasis={4} />
            </Layout>
            <Layout>
              <ArrowDownIcon width={20} height={20} />
            </Layout>
          </Link>
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