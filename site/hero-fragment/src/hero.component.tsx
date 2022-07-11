import React               from 'react'
import { forwardRef }      from 'react'

import { Button }          from '@ui/button'
import { Divider }         from '@ui/divider'
import { ArrowDownIcon }   from '@ui/icons'
import { ImageBlock }      from '@ui/image'
import { Box }             from '@ui/layout'
import { Row }             from '@ui/layout'
import { Column }          from '@ui/layout'
import { Layout }          from '@ui/layout'
import { Link }            from '@ui/link'
import { NextLink }        from '@ui/link'
import { SocialLinksDark } from '@ui/social-links'
import { Text }            from '@ui/text'

import { useHero }         from './data'

const Hero = forwardRef((props, ref: any) => {
  const { hero } = useHero()

  const title = {
    text: '',
    highlighted: '',
  }
  let phone = ''
  let CTA = ''
  let signIn = ''

  if (hero) {
    CTA = hero[3]?.title
    phone = hero[0]?.title
    signIn = hero[2]?.title
    title.text = hero[1]?.title.substring(0, hero[1]?.title.lastIndexOf(' '))
    title.highlighted = hero[1]?.title.slice(hero[1]?.title.lastIndexOf(' '))
  }

  return (
    <Box
      minHeight={[640, 640, 800]}
      width={['100%', '100%', '1440px']}
      justifyContent='center'
      ref={ref}
    >
      <Box
        backgroundColor='black'
        position='absolute'
        width='100%'
        height={[640, 640, 800]}
        zIndex='-1'
      >
        <ImageBlock
          src={hero[1]?.featuredImage.node.mediaItemUrl}
          alt={hero[1]?.featuredImage.node.altText}
          style={{ opacity: 0.5 }}
        />
      </Box>
      <Layout flexBasis={[20, 20, 80]} />
      <Column width='100%'>
        <Layout flexBasis={[120, 120, 367]} flexGrow={1} />
        <Column width={[335, 335, 900]} height={[240, 240, 201]}>
          <Row>
            <Text
              fontSize={['giant', 'giant', 'extra']}
              lineHeight='grown'
              fontWeight='bold'
              color='white'
            >
              {title.text}
            </Text>
          </Row>
          <Row>
            <Text
              fontSize={['giant', 'giant', 'extra']}
              lineHeight='grown'
              fontWeight='bold'
              color='white'
              opacity={0.5}
            >
              {title.highlighted}
            </Text>
          </Row>
        </Column>
        <Layout flexBasis={32} />
        <NextLink path='/booking'>
          <Layout width={['100%', '100%', '180px']}>
            <Button>{signIn !== undefined ? signIn : ''}</Button>
          </Layout>
        </NextLink>
        <Layout flexBasis={[40, 40, 48]} />
        <Divider backgroundColor='milkGray' />
        <Layout flexBasis={[20, 20, 30]} />
        <Row width='100%' justifyContent={['center', 'center', 'space-between']}>
          <Box width='100%' display={['none', 'none', 'flex']} alignItems='center'>
            <Link href='#services'>
              <Layout>
                <Text color='white' fontWeight='medium' fontFamily='primary'>
                  {CTA}
                </Text>
                <Layout>
                  <ArrowDownIcon width={20} height={20} />
                </Layout>
              </Layout>
            </Link>
          </Box>
          <Box width='100%' alignItems='center'>
            <Box width='100%' justifyContent={['flex-start', 'flex-start', 'flex-end']}>
              <Link href={`tel:${phone}`}>
                <Text color='white' fontWeight='medium'>
                  {phone}
                </Text>
              </Link>
            </Box>
            <Layout flexBasis={32} flexShrink={0} display={['none', 'none', 'flex']} />
            <Box justifyContent='flex-end'>
              <SocialLinksDark />
            </Box>
          </Box>
        </Row>
        <Layout flexBasis={[20, 20, 30]} />
      </Column>
      <Layout flexBasis={[20, 20, 80]} />
    </Box>
  )
})

export { Hero }
