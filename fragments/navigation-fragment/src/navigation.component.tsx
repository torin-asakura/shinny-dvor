import type { NavigationProps } from './navigation.interface.js'
import type { FC }              from 'react'

import React                    from 'react'
import { useState }             from 'react'

import { Booking }              from '@fragments/booking-fragment'
import { INITIAL }              from '@store/booking'
import { Button }               from '@ui/button'
import { Drawer }               from '@ui/drawer'
import { MenuIcon }             from '@ui/icons'
import { Layer }                from '@ui/layer'
import { Box }                  from '@ui/layout'
import { Column }               from '@ui/layout'
import { Row }                  from '@ui/layout'
import { Layout }               from '@ui/layout'
import { Logo }                 from '@ui/logo'
import { Text }                 from '@ui/text'
import { extractFragment }      from '@globals/data'
import { extractFragments }     from '@globals/data'
import { screenVar }            from '@store/booking'

import { NavigationListMobile } from './navigation-list-mobile/index.js'
import { NavigationList }       from './navigation-list/index.js'
import { getColor }             from './helpers/index.js'
import { getColorBackground }   from './helpers/index.js'

export const Navigation: FC<NavigationProps> = ({
  active,
  navigationData,
  availableRadiiData,
  navigationItemsType = 'nav-item',
  fragmentsData,
  carBodiesData,
  servicesData,
  scrollY,
}) => {
  const [visible, setVisible] = useState<boolean>(false)
  const [drawer, setDrawer] = useState<boolean>(false)

  const mainNavigationItem = extractFragment('contentAddons', 'main', navigationData)
  const navigationIndexItems = extractFragments(
    navigationItemsType,
    'contentAddons',
    navigationData
  )
  const signUp = extractFragment('contentAddons', 'sign-up', fragmentsData)

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
        width='100%'
        zIndex={1000}
        height={{ mobile: '80px', tablet: '80px', desktop: '104px' }}
        position='fixed'
        justifyContent='center'
        backgroundColor={getColorBackground(active!, scrollY)}
        style={{ transition: '.2s' }}
      >
        <Layout flexBasis={{ mobile: '20px', tablet: '20px', desktop: '32px' }} flexShrink={0} />
        <Box width={{ mobile: '100%', tablet: '100%', desktop: '1440px' }}>
          <Column width='100%'>
            <Layout flexBasis={{ mobile: '20px', tablet: '20px', desktop: '28px' }} />
            <Row justifyContent='space-between'>
              <Box
                position='relative'
                alignItems='center'
                display={{ mobile: 'flex', tablet: 'flex', desktop: 'none' }}
              >
                <Button
                  size='ghost'
                  color='transparent'
                  onClick={() => {
                    setDrawer(!drawer)
                  }}
                >
                  <MenuIcon width='24px' height='24px' color={getColor(active!, scrollY)} />
                </Button>
                <Drawer
                  active={drawer}
                  onClose={() => {
                    setDrawer(false)
                  }}
                >
                  <NavigationListMobile
                    scrollY={scrollY}
                    active={active}
                    navigation={navigationIndexItems}
                  />
                </Drawer>
                <Layout flexBasis={{ mobile: '20px', tablet: '20px', desktop: 0 }} flexShrink={0} />
                <Layout>
                  <Logo path={mainNavigationItem.content} color={getColor(active!, scrollY)} />
                </Layout>
              </Box>
              <Layout display={{ mobile: 'none', tablet: 'none', desktop: 'flex' }}>
                <Logo path={mainNavigationItem.content} color={getColor(active!, scrollY)} />
              </Layout>
              <Box
                display={{ mobile: 'none', tablet: 'none', desktop: 'flex' }}
                width='410px'
                alignItems='center'
              >
                <NavigationList
                  scrollY={scrollY}
                  active={active}
                  navigation={navigationIndexItems}
                />
              </Box>
              <Box width={{ mobile: '176px', tablet: '176px', desktop: '201px' }} zIndex={1}>
                <Layout flexGrow={1} />
                <Box
                  width={{ mobile: '124px', tablet: '124px', desktop: '137px' }}
                  height={{ mobile: '40px', tablet: '40px', desktop: '48px' }}
                >
                  <Layout
                    width='100%'
                    display={{ mobile: 'flex', tablet: 'flex', desktop: 'none' }}
                  >
                    <Button
                      size='small'
                      onClick={() => {
                        setVisible(true)
                        screenVar(INITIAL)
                      }}
                    >
                      <Layout>
                        <Text fontWeight='bold'>{signUp?.title}</Text>
                      </Layout>
                    </Button>
                  </Layout>
                  <Layout
                    width='100%'
                    display={{ mobile: 'none', tablet: 'none', desktop: 'flex' }}
                  >
                    <Button
                      onClick={() => {
                        setVisible(true)
                        screenVar(INITIAL)
                      }}
                    >
                      <Text fontWeight='bold'>{signUp?.title}</Text>
                    </Button>
                  </Layout>
                </Box>
              </Box>
            </Row>
            <Layout flexBasis={{ mobile: '20px', tablet: '20px', desktop: '28px' }} />
          </Column>
        </Box>
        <Layout flexBasis={{ mobile: '20px', tablet: '20px', desktop: '32px' }} flexShrink={0} />
      </Box>
    </>
  )
}
