import React              from 'react'
import { FC }             from 'react'

import { Box }            from '@ui/layout'
import { NextNavLink }    from '@ui/link'

import { NavigationItem } from '../navigation-item'

const NavigationList: FC = () => (
  <Box width='100%' justifyContent='space-between' flexWrap='wrap'>
    <NextNavLink path='/services'>
      services
      {/*<NavigationItem name='services' />*/}
    </NextNavLink>
    <NextNavLink path='/contacts'>
      contacts
      {/*<NavigationItem name='contacts' />*/}
    </NextNavLink>
    <NextNavLink path='/blog'>
      blog
      {/*<NavigationItem name='blog' />*/}
    </NextNavLink>
  </Box>
)

export { NavigationList }
