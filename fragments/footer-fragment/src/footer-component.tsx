import React           from 'react'
import { FC }          from 'react'

import { Divider }     from '@ui/divider'
import { Box }         from '@ui/layout'
import { Column }      from '@ui/layout'
import { Row }         from '@ui/layout'
import { Layout }      from '@ui/layout'
import { NextLink }    from '@ui/link'
import { Link }        from '@ui/link'
import { FooterLogo }  from '@ui/logo'
import { SocialLinks } from '@ui/social-links'
import { Text }        from '@ui/text'
import { Space }       from '@ui/text'

const Footer: FC = () => (
  <Box width='100%'>
    <Column width='100%' alignItems='center'>
      <Divider color='gray' />
      <Box minWidth={['100%', '100%', '1440px']}>
        <Layout flexBasis={[20, 20, 80]} />
        <Column width='100%'>
          <Layout flexBasis={[24, 24, 40]} />
          <Row justifyContent='space-between' alignItems='center'>
            <Box width='100%' justifyContent='space-between'>
              <FooterLogo />
              <Box display={['none', 'none', 'flex']} width={392} alignItems='center'>
                <Layout flexBasis={60} />
                <Box width='100%' justifyContent='space-between' flexWrap='wrap'>
                  <NextLink path='/services'>
                    <Layout>
                      <Text color='black' fontWeight='medium'>
                        Услуги
                      </Text>
                    </Layout>
                  </NextLink>
                  <NextLink path='/contacts'>
                    <Layout>
                      <Text color='black' fontWeight='medium'>
                        Контакты
                      </Text>
                    </Layout>
                  </NextLink>
                  <NextLink path='/blog'>
                    <Layout>
                      <Text color='black' fontWeight='medium'>
                        Блог
                      </Text>
                    </Layout>
                  </NextLink>
                </Box>
              </Box>
            </Box>
            <SocialLinks />
          </Row>
          <Layout flexBasis={[24, 24, 40]} />
          <Box width={90} height={136} display={['flex', 'flex', 'none']}>
            <Box width='100%' justifyContent='space-between' flexWrap='wrap'>
              <NextLink path='/services'>
                <Layout>
                  <Text color='black' fontWeight='medium'>
                    Услуги
                  </Text>
                </Layout>
              </NextLink>
              <NextLink path='/contacts'>
                <Layout>
                  <Text color='black' fontWeight='medium'>
                    Контакты
                  </Text>
                </Layout>
              </NextLink>
              <NextLink path='/blog'>
                <Layout>
                  <Text color='black' fontWeight='medium'>
                    Блог
                  </Text>
                </Layout>
              </NextLink>
            </Box>
          </Box>
        </Column>
        <Layout flexBasis={[20, 20, 80]} />
      </Box>
      <Divider color='gray' />
      <Box alignItems='center' minWidth={['100%', '100%', '1440px']}>
        <Layout flexBasis={[20, 20, 84]} flexShrink={0} />
        <Column width='100%'>
          <Layout flexBasis={[24, 24, 32]} />
          <Row
            justifyContent='space-between'
            alignItems='center'
            display={['none', 'none', 'flex']}
          >
            <Box width='50%'>
              <Layout display='flex' flexDirection='column'>
                <Text>Address</Text>
                <Layout flexBasis={8} />
                <Text color='darkGray'>Date</Text>
              </Layout>
              <Layout flexBasis={80} />
              <Layout display='flex' flexDirection='column'>
                <Text>Tel</Text>
                <Layout flexBasis={8} />
                <Text color='darkGray'>Телефон для записи</Text>
              </Layout>
            </Box>
            <Layout>
              <Text color='darkGray'>by</Text>
              <Space />
              <Link href='https://torinasakura.name/' target='_blank' rel='me'>
                <Text fontWeight='medium'>TorinAsakura</Text>
              </Link>
            </Layout>
          </Row>
          <Column justifyContent='space-between' display={['flex', 'flex', 'none']}>
            <Layout>
              <Text>Address</Text>
            </Layout>
            <Layout flexBasis={24} />
            <Row justifyContent='space-between'>
              <Layout>
                <Text>Tel</Text>
              </Layout>
              <Layout>
                <Link href='https://torinasakura.name/' target='_blank' rel='me'>
                  <Text color='darkGray'>by</Text>
                  <Space />
                  <Text fontWeight='medium'>TorinAsakura</Text>
                </Link>
              </Layout>
            </Row>
          </Column>
          <Layout flexBasis={[24, 24, 32]} flexShrink={0} />
        </Column>
        <Layout flexBasis={[20, 20, 80]} flexShrink={0} />
      </Box>
    </Column>
  </Box>
)

export { Footer }
