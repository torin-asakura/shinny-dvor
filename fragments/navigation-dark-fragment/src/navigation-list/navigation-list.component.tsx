import React              from 'react'
import { FC }             from 'react'

import { Box }            from '@ui/layout'
import { NextLink }       from '@ui/link'

import { NavigationItem } from '../navigation-item'

const NavigationList: FC = () => (
  <Box width='100%' justifyContent='space-between' flexWrap='wrap'>
    <NextLink href='/services'>
      <NavigationItem name='services' />
    </NextLink>
    <NextLink href='/contacts'>
      <NavigationItem name='contacts' />
    </NextLink>
    <NextLink href='/blog'>
      <NavigationItem name='blog' />
    </NextLink>
  </Box>
)

export { NavigationList }
