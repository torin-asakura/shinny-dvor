import React              from 'react'
import { FC }             from 'react'

import { Box }            from '@ui/layout'
import { Link }           from '@ui/link'

import { NavigationItem } from '../navigation-item'

const NavigationList: FC = () => (
  <Box width='100%' justifyContent='space-between' flexWrap='wrap'>
    <Link path='/services'>
      <NavigationItem name='services' />
    </Link>
    <Link path='/contacts'>
      <NavigationItem name='contacts' />
    </Link>
    <Link path='/blog'>
      <NavigationItem name='blog' />
    </Link>
  </Box>
)

export { NavigationList }
