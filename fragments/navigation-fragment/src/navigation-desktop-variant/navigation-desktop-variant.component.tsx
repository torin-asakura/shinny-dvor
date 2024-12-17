import type { NavigationDesktopVariantProps } from './navigation-desktop-variant.interfaces.js'
import type { FC }                            from 'react'

import React                                  from 'react'

import { INITIAL }                            from '@store/booking'
import { Button }                             from '@ui/button'
import { Layout }                             from '@ui/layout'
import { Box }                                from '@ui/layout'
import { Logo }                               from '@ui/logo'
import { Text }                               from '@ui/text'
import { screenVar }                          from '@store/booking'

import { NavigationList }                     from '../navigation-list/index.js'
import { getColor }                           from '../helpers/index.js'

export const NavigationDesktopVariant: FC<NavigationDesktopVariantProps> = ({
  active,
  mainNavigationItem,
  navigationIndexItems,
  setVisible,
  signUp,
}) => {
  return (
    <>
      <Layout display={['none', 'none', 'flex']}>
        <Logo path={mainNavigationItem.content} color={getColor(active!, scrollY)} />
      </Layout>
      <Box display={['none', 'none', 'flex']} width={410} alignItems='center'>
        <NavigationList scrollY={scrollY} active={active} navigation={navigationIndexItems} />
      </Box>
      <Box width={[176, 176, 201]} zIndex={1}>
        <Layout flexGrow={1} />
        <Box width={[124, 124, 137]} height={[40, 40, 48]}>
          <Layout width='100%' display={['none', 'none', 'flex']}>
            <Button
              onClick={() => {
                setVisible(true)
                screenVar(INITIAL)
              }}
            >
              {signUp?.title}
            </Button>
          </Layout>
        </Box>
      </Box>
    </>
  )
}
