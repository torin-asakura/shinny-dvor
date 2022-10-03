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
import { extractFragment }      from '@globals/data'
import { extractFragments }     from '@globals/data'

import { NavigationList }       from './navigation-list'
import { NavigationListMobile } from './navigation-list-mobile'
import { SizeButton }           from './size-button'
import { useNavigation }        from './data'

const Navigation: FC = () => {
  const [drawer, setDrawer] = useState<boolean>(false)

  const navigation = useNavigation()

  const navigationItems = extractFragments('nav-item', 'contentAddons', navigation)
  const signUp = extractFragment('contentAddons', 'booking', navigation)

  return (
    <Box
      width='100%'
      height={[80, 80, 104]}
      backgroundColor='white'
      justifyContent='center'
      position='sticky'
      top={0}
      zIndex={1000}
    >
      <Box width={['100%', '100%', 1440]}>
        <Layout flexBasis={[20, 20, 32]} flexShrink={0} />
        <Column width='100%'>
          <Layout flexBasis={[20, 20, 28]} />
          <Row justifyContent='space-between'>
            <Box alignItems='center' width={[84, 84, 201]}>
              <Layout display={['flex', 'flex', 'none']}>
                <Button size='ghost' color='transparent' onClick={() => setDrawer(!drawer)}>
                  <MenuIcon width={24} height={24} color='black' />
                </Button>
                <Drawer active={drawer} onClose={() => setDrawer(!drawer)}>
                  <NavigationListMobile navigation={navigationItems} />
                </Drawer>
              </Layout>
              <Layout flexBasis={[16, 16, 0]} flexShrink={0} />
              <Layout>
                <Logo color='black' />
              </Layout>
            </Box>
            <Box display={['none', 'none', 'flex']} width={410} alignItems='center'>
              <NavigationList navigation={navigationItems} />
            </Box>
            <Box width={[176, 176, 201]}>
              <SizeButton />
              <Layout flexBasis={16} />
              <NextLink path={signUp?.content}>
                <Box width={[124, 124, 137]} height={[40, 40, 48]}>
                  <Layout width='100%' display={['flex', 'flex', 'none']}>
                    <Button size='small'>
                      <Layout>
                        <Text fontWeight='bold'>{signUp?.title}</Text>
                      </Layout>
                    </Button>
                  </Layout>
                  <Layout width='100%' display={['none', 'none', 'flex']}>
                    <Button>
                      <Text fontWeight='bold'>{signUp?.title}</Text>
                    </Button>
                  </Layout>
                </Box>
              </NextLink>
            </Box>
          </Row>
          <Layout flexBasis={[20, 20, 28]} />
        </Column>
        <Layout flexBasis={[20, 20, 32]} flexShrink={0} />
      </Box>
    </Box>
  )
}

export { Navigation }
