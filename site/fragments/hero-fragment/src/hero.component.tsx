import React               from 'react'
import { forwardRef }      from 'react'

import { INITIAL }         from '@store/booking'
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
import { extractFragment } from '@globals/data'
import { screenVar }       from '@store/booking'

const Hero = forwardRef(({ heroData, contactsData }: any, ref: any) => {
  const leadObj = extractFragment('contentAddons', 'lead', heroData)
  const ctaObj = extractFragment('contentAddons', 'cta', heroData)
  const anchorObj = extractFragment('contentAddons', 'anchor', heroData)
  const contactsObj = extractFragment('contactAddons', 'info', contactsData)

  const title = new Map([
    ['title', leadObj?.title],
    ['highlighted', leadObj?.highlightedtext],
  ])
  const backgroundImage = new Map([
    ['url', leadObj?.image.sourceUrl],
    ['altText', leadObj?.image.altText],
  ])
  const CTA = ctaObj?.title
  const anchor = anchorObj?.title
  const phone = contactsObj?.telephone
  const linkVk = contactsObj?.linkVk
  const linkFb = contactsObj?.linkFb

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
          src={backgroundImage.get('url')}
          alt={backgroundImage.get('altText')}
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
              {title.get('title')}
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
              {title.get('highlighted')}
            </Text>
          </Row>
        </Column>
        <Layout flexBasis={32} />
        <NextLink path='/booking'>
          <Layout width={['100%', '100%', '180px']}>
            <Button onClick={() => screenVar(INITIAL)}>{CTA}</Button>
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
                    {anchor}
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
              <SocialLinksDark linkVk={linkVk} linkFb={linkFb} />
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
