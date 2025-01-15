import type { FC }                           from 'react'

import type { NavigationCommonVariantProps } from './navigation-common-variant.interfaces.js'

import React                                 from 'react'

import { INITIAL }                           from '@store/booking'
import { Button }                            from '@ui/button'
import { Drawer }                            from '@ui/drawer'
import { MenuIcon }                          from '@ui/icons'
import { Layout }                            from '@ui/layout'
import { Row }                               from '@ui/layout'
import { Box }                               from '@ui/layout'
import { Logo }                              from '@ui/logo'
import { Text }                              from '@ui/text'
import { screenVar }                         from '@store/booking'

import { NavigationListMobile }              from '../navigation-list-mobile/index.js'
import { getColor }                          from '../helpers/index.js'

export const NavigationCommonVariant: FC<NavigationCommonVariantProps> = ({
  drawer,
  setDrawer,
  active,
  navigationIndexItems,
  mainNavigationItem,
  setVisible,
  signUp,
  scrollY,
}) => (
  <Layout display={['flex', 'flex', 'none']}>
    <Row justifyContent='space-between'>
      <Box position='relative' alignItems='center' display={['flex', 'flex', 'none']}>
        <Button
          size='ghost'
          variant='transparent'
          onClick={() => {
            setDrawer(!drawer)
          }}
        >
          <MenuIcon width={24} height={24} color={getColor(active, scrollY)} />
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
        <Layout width={[20, 20, 0]} flexShrink='0' />
        <Layout>
          <Logo path={mainNavigationItem.content} color={getColor(active, scrollY)} />
        </Layout>
      </Box>
      <Box width={[176, 176, 201]} zIndex='1'>
        <Layout flexGrow='1' />
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
                <Text fontWeight='$semiBold'>{signUp?.title}</Text>
              </Layout>
            </Button>
          </Layout>
        </Box>
      </Box>
    </Row>
  </Layout>
)
