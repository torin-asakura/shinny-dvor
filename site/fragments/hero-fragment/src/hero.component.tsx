/* eslint-disable */

import React               from 'react'
import { useState }        from 'react'
import { forwardRef }      from 'react'

import { Booking }         from '@fragments/booking-fragment'
import { INITIAL }         from '@store/booking'
import { Button }          from '@ui/button'
import { Divider }         from '@ui/divider'
import { ArrowDownIcon }   from '@ui/icons'
import { ImageBlock }      from '@ui/image'
import { Layer }           from '@ui/layer'
import { Box }             from '@ui/layout'
import { Row }             from '@ui/layout'
import { Column }          from '@ui/layout'
import { Layout }          from '@ui/layout'
import { Link }            from '@ui/link'
import { SocialLinksDark } from '@ui/social-links'
import { Text }            from '@ui/text'
import { extractFragment } from '@globals/data'
import { screenVar }       from '@store/booking'

export const Hero = forwardRef((
  {
    uiData,
    fragmentsData,
    contactsData,
    availableRadiiData,
    carBodiesData,
    servicesData,
    navigationData,
  }: any,
  ref: any
) => {
  const [visible, setVisible] = useState<boolean>(false)

  const leadObj = extractFragment('contentAddons', 'hero-title', fragmentsData)
  const ctaObj = extractFragment('contentAddons', 'sign-up', fragmentsData)
  const anchorObj = extractFragment('contentAddons', 'our-services', fragmentsData)
  const contactsObj = extractFragment('contactAddons', 'info', contactsData)
  const backgroundObj = extractFragment('contentAddons', 'hero', uiData)

  const telegramContanctsObj = extractFragment('contactAddons', 'linkTelegram', contactsData)

  const title = new Map([
    ['title', leadObj?.title],
    ['highlighted', leadObj?.highlightedtext],
  ])
  const backgroundImage = new Map([
    ['url', backgroundObj?.image.sourceUrl],
    ['altText', backgroundObj?.image.altText],
  ])
  const CTA = ctaObj?.title
  const anchor = anchorObj?.title
  const phone = contactsObj?.telephone
  const linkVk = contactsObj?.linkVk
  const linkTelegram = telegramContanctsObj?.address

  return (
    <>
      <Layer
        scroll
        visible={visible}
        onClose={() => {
          setVisible(true)
        }}
      >
        <Booking
          setVisible={setVisible}
          fragmentsData={fragmentsData}
          availableRadiiData={availableRadiiData}
          carBodiesData={carBodiesData}
          servicesData={servicesData}
          navigationData={navigationData}
        />
      </Layer>
      <Box
        ref={ref}
        maxWidth={{ mobile: '100%', tablet: '100%', desktop: '1440px' }}
        width='100%'
        height='100vh'
        justifyContent='center'
      >
        <Box backgroundColor='$black' position='absolute' width='100%' height='100vh' zIndex='-1'>
          <ImageBlock
            width={1440}
            height={800}
            src={backgroundImage.get('url')}
            alt={backgroundImage.get('altText')}
            style={{ opacity: 0.5 }}
          />
        </Box>
        <Layout flexBasis={{ mobile: '20px', tablet: '20px', desktop: '80px' }} flexShrink={0} />
        <Column width='100%'>
          <Layout flexBasis={{ mobile: '120px', tablet: '120px', desktop: '367px' }} flexGrow={1} />
          <Column
            width='100%'
            maxWidth={{ mobile: '335px', tablet: '335px', desktop: '900px' }}
            height={{ mobile: '240px', tablet: '240px', desktop: '201px' }}
          >
            <Row>
              <Text
                fontSize={{ mobile: '$giant', tablet: '$giant', desktop: '$extra' }}
                lineHeight='grown'
                fontWeight='bold'
                color='white'
              >
                {title.get('title')}
              </Text>
            </Row>
            <Row>
              <Text
                fontSize={{ mobile: '$giant', tablet: '$giant', desktop: '$extra' }}
                lineHeight='grown'
                fontWeight='bold'
                color='white'
                opacity={0.5}
              >
                {title.get('highlighted')}
              </Text>
            </Row>
          </Column>
          <Layout flexBasis='32px' flexShrink={0} />
          <Layout width={{ mobile: '100%', tablet: '100%', desktop: '180px' }}>
            <Button
              onClick={() => {
                screenVar(INITIAL)
                setVisible(true)
              }}
            >
              {CTA}
            </Button>
          </Layout>
          <Layout flexBasis={{ mobile: '40px', tablet: '40px', desktop: '48px' }} flexShrink={0} />
          <Divider backgroundColor='milkGray' />
          <Layout flexBasis={{ mobile: '20px', tablet: '20px', desktop: '30px' }} flexShrink={0} />
          <Box width='100%'>
            <Box
              width='100%'
              display={{ mobile: 'none', tablet: 'none', desktop: 'flex' }}
              alignItems='center'
            >
              <Link href='#services'>
                <Row width='150px'>
                  <Layout>
                    <Text color='white' fontWeight='medium' fontFamily='primary'>
                      {anchor}
                    </Text>
                  </Layout>
                  <Layout flexBasis='10px' flexShrink={0} />
                  <Layout>
                    <ArrowDownIcon width='20px' height='20px' />
                  </Layout>
                </Row>
              </Link>
            </Box>
            <Row
              alignItems='center'
              justifyContent={{ mobile: 'flex-start', tablet: 'flex-start', desktop: 'flex-end' }}
            >
              <Box
                justifyContent={{ mobile: 'flex-start', tablet: 'flex-start', desktop: 'flex-end' }}
              >
                <Link href={`tel:${phone}`}>
                  <Text color='white' fontWeight='medium'>
                    {phone}
                  </Text>
                </Link>
              </Box>
              <Layout
                flexBasis={{ mobile: 0, tablet: 0, desktop: '32px' }}
                flexShrink={0}
                flexGrow={{ mobile: '1px', tablet: '1px', desktop: 0 }}
              />
              <Box width='96px' justifyContent='flex-end'>
                <SocialLinksDark linkTelegram={linkTelegram} linkVk={linkVk} />
              </Box>
            </Row>
          </Box>
          <Layout flexBasis={{ mobile: '20px', tablet: '20px', desktop: '30px' }} flexShrink={0} />
        </Column>
        <Layout flexBasis={{ mobile: '20px', tablet: '20px', desktop: '80px' }} flexShrink={0} />
      </Box>
    </>
  )
})
