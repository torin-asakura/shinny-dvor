import React                   from 'react'
import { FC }                  from 'react'

import { Box }                 from '@ui/layout'
import { Layout }              from '@ui/layout'
import { NextNavLink }         from '@ui/link'

import { NavigationItem }      from '../navigation-item'
import { NavigationListProps } from './navigation-list.interface'

const NavigationList: FC<NavigationListProps> = ({ active }) => (
  <Box width='100%' justifyContent='space-between' flexWrap='wrap'>
    <Layout>
      <NextNavLink path='/services'>
        <NavigationItem name='services' active={active} />
      </NextNavLink>
    </Layout>
    <Layout>
      <NextNavLink path='/contacts'>
        <NavigationItem name='contacts' active={active} />
      </NextNavLink>
    </Layout>
    <Layout>
      <NextNavLink path='/blog'>
        <NavigationItem name='blog' active={active} />
      </NextNavLink>
    </Layout>
  </Box>
)

export { NavigationList }
