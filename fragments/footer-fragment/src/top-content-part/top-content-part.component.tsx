import type { FC }                  from 'react'

import type { TopContentPartProps } from './top-content-part.interface.js'

import React                        from 'react'

import { Column }                   from '@ui/layout'
import { Row }                      from '@ui/layout'
import { Layout }                   from '@ui/layout'
import { Box }                      from '@ui/layout'
import { NextNavLink }              from '@ui/link'
import { FooterLogo }               from '@ui/logo'
import { SocialLinks }              from '@ui/social-links'
import { Text }                     from '@ui/text'

export const TopContentPart: FC<TopContentPartProps> = ({
  linkTelegram,
  linkVk,
  navigationItems,
  mainPage,
}) => (
  <Box maxWidth={['100%', '100%', 1440]} width='100%'>
    <Layout flexBasis={[20, 20, 80]} flexShrink={0} />
    <Column width='100%'>
      <Layout flexBasis={[24, 24, 40]} />
      <Row justifyContent='space-between' alignItems='center'>
        <Box width='100%'>
          <FooterLogo path={mainPage?.content} />
          <Box display={['none', 'none', 'flex']} width={392} alignItems='center'>
            <Layout flexBasis={60} />
            <Box width='100%' justifyContent='space-between' flexWrap='wrap'>
              {navigationItems.map(({ contentAddons: { title, content } }) => (
                <NextNavLink key={title} path={content}>
                  <Text fontWeight='medium'>{title}</Text>
                </NextNavLink>
              ))}
            </Box>
          </Box>
        </Box>
        <SocialLinks linkTelegram={linkTelegram} linkVk={linkVk} />
      </Row>
      <Layout flexBasis={[24, 24, 40]} />
      <Box width={90} height={136} display={['flex', 'flex', 'none']}>
        <Box width='100%' justifyContent='space-between' flexWrap='wrap'>
          {navigationItems.map(({ contentAddons: { title, content } }) => (
            <NextNavLink key={title} path={content}>
              <Layout>
                <Text color='black' fontWeight='medium'>
                  {title}
                </Text>
              </Layout>
            </NextNavLink>
          ))}
        </Box>
      </Box>
    </Column>
    <Layout flexBasis={[20, 20, 80]} flexShrink={0} />
  </Box>
)
