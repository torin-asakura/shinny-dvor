import React              from 'react'
import { FC }             from 'react'

import { Box }            from '@ui/layout'
import { NextLink }           from '@ui/link'

import { NavigationItem } from '../navigation-item'

const NavigationList: FC = () => (
  <Box width='100%' justifyContent='space-between' flexWrap='wrap'>
    <NextLink path='/services'>
      <NavigationItem name='services' />
    </NextLink>
    <NextLink path='/contacts'>
      <NavigationItem name='contacts' />
    </NextLink>
    <NextLink path='/blog'>
      <NavigationItem name='blog' />
    </NextLink>
  </Box>
)

export { NavigationList }
