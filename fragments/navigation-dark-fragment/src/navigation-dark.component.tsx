import React                    from 'react'
import { FC }                   from 'react'
import { useState }             from 'react'

import { Button }               from '@ui/button'
import { Drawer }               from '@ui/drawer'
import { MenuIcon }             from '@ui/icons'
import { Box }                  from '@ui/layout'
import { Column }               from '@ui/layout'
import { Row }                  from '@ui/layout'
import { Layout }               from '@ui/layout'
import { NextLink }             from '@ui/link'
import { Logo }                 from '@ui/logo'
import { Text }                 from '@ui/text'
import { usePopover }           from '@ui/utils'

import { NavigationDarkProps }  from './navigation-dark.interface'
import { NavigationList }       from './navigation-list'
import { NavigationListMobile } from './navigation-list-mobile'
import { SizeButton }           from './size-button'
import { SizeButtonCard }       from './size-button'
import { SizeButtonDropdown }   from './size-button'
import { getColor }             from './helpers'
import { getColorBackground }   from './helpers'

const NavigationDark: FC<NavigationDarkProps> = ({ active }) => {
  const [drawer, setDrawer] = useState<boolean>(false)

  const { layerProps, triggerProps, render, setOpen } = usePopover('bottom-center', 12, 'click')

  return (
    <Box
      width='100%'
      zIndex={1000}
      height={[80, 80, 104]}
      position='fixed'
      justifyContent='center'
      backgroundColor={getColorBackground(active!)}
      style={{ transition: '.2s' }}
    >
      <Layout flexBasis={[20, 20, 32]} flexShrink={0} />
      <Box width={['100%', '100%', '1440px']}>
        <Column width='100%'>
          <Layout flexBasis={[20, 20, 28]} />
          <Row justifyContent='space-between'>
            <Box position='relative' alignItems='center' display={['flex', 'flex', 'none']}>
              <Button size='ghost' color='transparent' onClick={() => setDrawer(!drawer)}>
                <MenuIcon width={24} height={24} color={getColor(active!)} />
              </Button>
              <Drawer active={drawer} onClose={() => setDrawer(false)}>
                <NavigationListMobile active={active} />
              </Drawer>
              <Layout flexBasis={[20, 20, 0]} flexShrink={0} />
              <Layout>
                <Logo color={getColor(active!)} />
              </Layout>
            </Box>
            <Layout display={['none', 'none', 'flex']}>
              <Logo color={getColor(active!)} />
            </Layout>
            <Box display={['none', 'none', 'flex']} width={410} alignItems='center'>
              <NavigationList active={active} />
            </Box>
            <Box width={[176, 176, 201]} zIndex={1}>
              <Layout display={['flex', 'flex', 'none']}>
                <SizeButtonCard active={active} />
              </Layout>
              <Layout display={['none', 'none', 'flex']} justifyContent='center'>
                <Layout {...triggerProps}>
                  <SizeButton active={active} />
                </Layout>
                {render(
                  <Layout {...layerProps}>
                    <SizeButtonDropdown setOpen={setOpen} />
                  </Layout>
                )}
              </Layout>
              <Layout flexBasis={16} />
              <NextLink path='/booking'>
                <Box width={[124, 124, 137]} height={[40, 40, 48]}>
                  <Layout width='100%' display={['flex', 'flex', 'none']}>
                    <Button size='small'>
                      <Layout>
                        <Text fontWeight='bold'>Sign up</Text>
                      </Layout>
                    </Button>
                  </Layout>
                  <Layout width='100%' display={['none', 'none', 'flex']}>
                    <Button>
                      <Text fontWeight='bold'>Sign up</Text>
                    </Button>
                  </Layout>
                </Box>
              </NextLink>
            </Box>
          </Row>
          <Layout flexBasis={[20, 20, 28]} />
        </Column>
      </Box>
      <Layout flexBasis={[20, 20, 32]} flexShrink={0} />
    </Box>
  )
}

export { NavigationDark }
