import React               from 'react'
import { FC }              from 'react'

import { Box }             from '@ui/layout'
import { Column }          from '@ui/layout'
import { Row }             from '@ui/layout'
import { Layout }          from '@ui/layout'
import { NextLink }        from '@ui/link'
import { Logo }            from '@ui/logo'
import { Condition }       from '@ui/condition'

import { NavigationList }  from './navigation-list'
import { NavigationProps } from './navigation.interface'

const Navigation: FC<NavigationProps> = ({ location }) => (
  <Box width='100%' minHeight={[80, 104, 104]} border='1px solid blue'>
    <Row>
      <Condition match={location === 'header'}>
        <Layout flexBasis={[20, 32, 32]} />
        <Column width='100%'>
          <Layout flexBasis={[20, 28, 28]} />
          <Row justifyContent='space-between'>
            <Box alignItems='center' width={[84, 201, 201]}>
              <Box
                display={['flex', 'none', 'none']}
                width={24}
                height={24}
                border='1px solid blue'
              >
                Menu
              </Box>
              <Layout flexBasis={[16, 0, 0]} />
              <Layout>
                <Logo />
              </Layout>
            </Box>
            <Box display={['none', 'flex', 'flex']} width={410} alignItems='center'>
              <NavigationList />
            </Box>
            <Box width={[176, 201, 201]}>
              <Box width={[40, 48, 48]} height={[40, 48, 48]} border='1px solid blue'>
                Diametr
              </Box>
              <Layout flexBasis={16} />
              <NextLink href='/booking'>
                <Box width={[124, 137, 137]} height={[40, 48, 48]} border='1px solid blue'>
                  Sign up
                </Box>
              </NextLink>
            </Box>
          </Row>
          <Layout flexBasis={[20, 28, 28]} />
        </Column>
        <Layout flexBasis={[20, 32, 32]} />
      </Condition>
      <Condition match={location === 'footer'}>
        <Layout flexBasis={[20, 80, 80]} />
        <Column width='100%'>
          <Layout flexBasis={[24, 40, 40]} />
          <Row justifyContent='space-between' alignItems='center'>
            <Box width='50%' justifyContent='space-between'>
              <Box width={[148, 198, 198]} border='1px solid blue'>
                <Logo />
              </Box>
              <Box display={['none', 'flex', 'flex']} width={392} alignItems='center'>
                <NavigationList />
              </Box>
            </Box>
            <Box width='50%' justifyContent='flex-end'>
              <Box width={48} height={48} border='1px solid blue'>
                VK
              </Box>
              <Layout flexBasis={16} />
              <Box width={48} height={48} border='1px solid blue'>
                F
              </Box>
            </Box>
          </Row>
          <Layout flexBasis={[24, 40, 40]} />
          <Box width={90} height={136} display={['flex', 'none', 'none']}>
            <NavigationList />
          </Box>
        </Column>
        <Layout flexBasis={[20, 80, 80]} />
      </Condition>
    </Row>
  </Box>
)

export { Navigation }
