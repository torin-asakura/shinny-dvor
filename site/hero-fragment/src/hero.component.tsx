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
import { useData }         from '@globals/data'
import { extractor }       from '@globals/data'

const Hero = forwardRef((props, ref: any) => {
  const { fragments } = useData()

  const title = new Map()
  let phone = ''
  let CTA = ''
  let signUp = ''
  let featuredImage

  if (fragments) {
    CTA = extractor(fragments?.hero?.Hero, 'title', 'our-services')
    phone = extractor(fragments?.contacts?.Contacts, 'title', 'telephone')
    signUp = extractor(fragments?.hero?.Hero, 'title', 'sign-up')
    featuredImage = extractor(fragments?.hero?.Hero, 'featuredImage', 'main-text')
    title.set('title', extractor(fragments?.hero?.Hero, 'title', 'main-text'))
    title.set('highlighted', extractor(fragments?.hero?.Hero, 'title', 'main-text'))
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
          src={featuredImage?.node.mediaItemUrl}
          alt={featuredImage?.node.altText}
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
              {title.get('title')?.substring(0, title.get('title')?.lastIndexOf(' '))}
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
              {title.get('highlighted')?.slice(title.get('highlighted')?.lastIndexOf(' '))}
            </Text>
          </Row>
        </Column>
        <Layout flexBasis={32} />
        <NextLink path='/booking'>
          <Layout width={['100%', '100%', '180px']}>
            <Button>{signUp !== undefined ? signUp : ''}</Button>
          </Layout>
        </NextLink>
        <Layout flexBasis={[40, 40, 48]} />
        <Divider backgroundColor='milkGray' />
        <Layout flexBasis={[20, 20, 30]} />
        <Row width='100%' justifyContent={['center', 'center', 'space-between']}>
          <Box width='100%' display={['none', 'none', 'flex']} alignItems='center'>
            <Link href='#services'>
              <Row width={150}>
                <Layout>
                  <Text color='white' fontWeight='medium' fontFamily='primary'>
                    {CTA}
                  </Text>
                </Layout>
                <Layout flexBasis={10} flexShrink={0} />
                <Layout>
                  <ArrowDownIcon width={20} height={20} />
                </Layout>
              </Row>
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
