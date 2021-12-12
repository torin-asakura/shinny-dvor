import React           from 'react'
import { FC }          from 'react'

import { Box }         from '@ui/layout'
import { Column }      from '@ui/layout'
import { Row }         from '@ui/layout'
import { Layout }      from '@ui/layout'
import { FooterLogo }  from '@ui/logo'
import { NextLink }    from '@ui/link'
import { Divider }     from '@ui/divider'
import { Text }        from '@ui/text'
import { SocialLinks } from '@fragments/social-links-fragment'

const Footer: FC = () => (
  <Box width='100%'>
    <Column width='100%'>
      <Divider color='gray' />
      <Row>
        <Layout flexBasis={[20, 80, 80]} />
        <Column width='100%'>
          <Layout flexBasis={[24, 40, 40]} />
          <Row justifyContent='space-between' alignItems='center'>
            <Box width='100%' justifyContent='space-between'>
              <FooterLogo />
              <Box display={['none', 'flex', 'flex']} width={392} alignItems='center'>
                <Layout flexBasis={60} />
                <Box width='100%' justifyContent='space-between' flexWrap='wrap'>
                  <NextLink href='/services'>
                    <Layout>
                      <Text fontWeight='medium'>Услуги</Text>
                    </Layout>
                  </NextLink>
                  <NextLink href='/prices'>
                    <Layout>
                      <Text fontWeight='medium'>Прайс лист</Text>
                    </Layout>
                  </NextLink>
                  <NextLink href='/contacts'>
                    <Layout>
                      <Text fontWeight='medium'>Контакты</Text>
                    </Layout>
                  </NextLink>
                  <NextLink href='/blog'>
                    <Layout>
                      <Text fontWeight='medium'>Блог</Text>
                    </Layout>
                  </NextLink>
                </Box>
              </Box>
            </Box>
            <SocialLinks />
          </Row>
          <Layout flexBasis={[24, 40, 40]} />
          <Box width={90} height={136} display={['flex', 'none', 'none']}>
            <Box width='100%' justifyContent='space-between' flexWrap='wrap'>
              <NextLink href='/services'>
                <Layout>
                  <Text fontWeight='medium'>Услуги</Text>
                </Layout>
              </NextLink>
              <NextLink href='/prices'>
                <Layout>
                  <Text fontWeight='medium'>Прайс лист</Text>
                </Layout>
              </NextLink>
              <NextLink href='/contacts'>
                <Layout>
                  <Text fontWeight='medium'>Контакты</Text>
                </Layout>
              </NextLink>
              <NextLink href='/blog'>
                <Layout>
                  <Text fontWeight='medium'>Блог</Text>
                </Layout>
              </NextLink>
            </Box>
          </Box>
        </Column>
        <Layout flexBasis={[20, 80, 80]} />
      </Row>
      <Divider color='gray' />
      <Row alignItems='center'>
        <Layout flexBasis={[20, 84, 84]} flexShrink={0} />
        <Column width='100%'>
          <Layout flexBasis={[24, 32, 32]} />
          <Row
            justifyContent='space-between'
            alignItems='center'
            display={['none', 'flex', 'flex']}
          >
            <Box width='50%'>
              <Layout>
                <Text>Address</Text>
              </Layout>
              <Layout flexBasis={80} />
              <Layout>
                <Text>Tel</Text>
              </Layout>
            </Box>
            <Layout>
              <Text>by TorinAsakura</Text>
            </Layout>
          </Row>
          <Column justifyContent='space-between' display={['flex', 'none', 'none']}>
            <Layout>
              <Text>Address</Text>
            </Layout>
            <Layout flexBasis={24} />
            <Row justifyContent='space-between'>
              <Layout>
                <Text>Tel</Text>
              </Layout>
              <Layout>
                <Text>by TorinAsakura</Text>
              </Layout>
            </Row>
          </Column>
          <Layout flexBasis={[24, 32, 32]} />
        </Column>
        <Layout flexBasis={[20, 80, 80]} flexShrink={0} />
      </Row>
    </Column>
  </Box>
)

export { Footer }
