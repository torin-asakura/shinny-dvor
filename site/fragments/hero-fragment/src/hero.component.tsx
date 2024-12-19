/* eslint-disable */

import { useState }        from 'react'
import { forwardRef }      from 'react'
import React               from 'react'

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

const Hero = forwardRef((
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
        maxWidth={['100%', '100%', 1440]}
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
        <Layout flexBasis={[20, 20, 80]} flexShrink={0} />
        <Column width='100%'>
          <Layout flexBasis={[120, 120, 367]} flexGrow={1} />
          <Column width='100%' maxWidth={[335, 335, 900]} height={[240, 240, 201]}>
            <Row>
              <Text
                fontSize={['$giant', '$giant', '$extra']}
                lineHeight='$grown'
                fontWeight='$semiBold'
                color='$white'
              >
                {title.get('title')}
              </Text>
            </Row>
            <Row>
              <Text
                fontSize={['$giant', '$giant', '$extra']}
                lineHeight='$grown'
                fontWeight='$semiBold'
                color='$white'
                opacity={0.5}
              >
                {title.get('highlighted')}
              </Text>
            </Row>
          </Column>
          <Layout flexBasis={32} flexShrink={0} />
          <Layout width={['100%', '100%', '180px']}>
            <Button
              onClick={() => {
                screenVar(INITIAL)
                setVisible(true)
              }}
            >
              {CTA}
            </Button>
          </Layout>
          <Layout flexBasis={[40, 40, 48]} flexShrink={0} />
          <Divider backgroundColor='$milkGray' />
          <Layout flexBasis={[20, 20, 30]} flexShrink={0} />
          <Box width='100%'>
            <Box width='100%' display={['none', 'none', 'flex']} alignItems='center'>
              <Link href='#services'>
                <Row width={150}>
                  <Layout>
                    <Text color='$white' fontWeight='$medium' fontFamily='$primary'>
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
            <Row alignItems='center' justifyContent={['flex-start', 'flex-start', 'flex-end']}>
              <Box justifyContent={['flex-start', 'flex-start', 'flex-end']}>
                <Link href={`tel:${phone}`}>
                  <Text color='$white' fontWeight='$medium'>
                    {phone}
                  </Text>
                </Link>
              </Box>
              <Layout flexBasis={[0, 0, 32]} flexShrink={0} flexGrow={[1, 1, 0]} />
              <Box width={96} justifyContent='flex-end'>
                <SocialLinksDark linkTelegram={linkTelegram} linkVk={linkVk} />
              </Box>
            </Row>
          </Box>
          <Layout flexBasis={[20, 20, 30]} flexShrink={0} />
        </Column>
        <Layout flexBasis={[20, 20, 80]} flexShrink={0} />
      </Box>
    </>
  )
})

export { Hero }
