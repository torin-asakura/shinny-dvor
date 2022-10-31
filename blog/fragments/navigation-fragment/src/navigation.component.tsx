import React                    from 'react'
import { FC }                   from 'react'
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

import { NavigationList }       from './navigation-list'
import { NavigationListMobile } from './navigation-list-mobile'
import { NavigationProps }      from './navigation.interface'

const Navigation: FC<NavigationProps> = ({
  navigationData,
  availableRadiiData,
  fragmentsData,
  carBodiesData,
  servicesData,
}) => {
  const [visible, setVisible] = useState<boolean>(false)
  const [drawer, setDrawer] = useState<boolean>(false)

  const navigationBlogItems = extractFragments('blog-nav-item', 'contentAddons', navigationData)
  const signUp = extractFragment('contentAddons', 'sign-up', fragmentsData)
  const mainPage = extractFragment('contentAddons', 'main', navigationData)

  return (
    <>
      <Layer scroll visible={visible} onClose={() => setVisible(true)}>
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
        height={[80, 80, 104]}
        position='fixed'
        justifyContent='center'
        backgroundColor='white'
        style={{ transition: '.2s' }}
      >
        <Layout flexBasis={[20, 20, 32]} flexShrink={0} />
        <Box width={['100%', '100%', '1440px']}>
          <Column width='100%'>
            <Layout flexBasis={[20, 20, 28]} />
            <Row justifyContent='space-between'>
              <Box position='relative' alignItems='center' display={['flex', 'flex', 'none']}>
                <Button size='ghost' color='transparent' onClick={() => setDrawer(!drawer)}>
                  <MenuIcon color='black' width={24} height={24} />
                </Button>
                <Drawer active={drawer} onClose={() => setDrawer(false)}>
                  <NavigationListMobile navigation={navigationBlogItems} />
                </Drawer>
                <Layout flexBasis={[20, 20, 0]} flexShrink={0} />
                <Layout>
                  <Logo path={mainPage.content} />
                </Layout>
              </Box>
              <Layout display={['none', 'none', 'flex']}>
                <Logo path={mainPage.content} />
              </Layout>
              <Box display={['none', 'none', 'flex']} width={410} alignItems='center'>
                <NavigationList navigation={navigationBlogItems} />
              </Box>
              <Box width={[176, 176, 201]} zIndex={1}>
                <Layout flexGrow={1} />
                <Box width={[124, 124, 137]} height={[40, 40, 48]}>
                  <Layout width='100%' display={['flex', 'flex', 'none']}>
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
                  <Layout width='100%' display={['none', 'none', 'flex']}>
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
            <Layout flexBasis={[20, 20, 28]} />
          </Column>
        </Box>
        <Layout flexBasis={[20, 20, 32]} flexShrink={0} />
      </Box>
    </>
  )
}

export { Navigation }
