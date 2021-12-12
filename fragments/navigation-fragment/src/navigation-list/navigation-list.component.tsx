import React                   from 'react'
import { FC }                  from 'react'

import { Box }                 from '@ui/layout'
import { Condition }           from '@ui/condition'
import { NextLink }            from '@ui/link'

import { NavigationItem }      from '../navigation-item/navigation-item.component'
import { NavigationListProps } from './navigation-list.interface'

const NavigationList: FC<NavigationListProps> = ({ pageStyle = 'light' }) => (
  <Box width='100%' justifyContent='space-between' flexWrap='wrap'>
    <Condition match={pageStyle === 'dark'}>
      <NextLink href='/services'>
        <NavigationItem name='services' pageStyle={pageStyle} />
      </NextLink>
      <NextLink href='/prices'>
        <NavigationItem name='prices' pageStyle={pageStyle} />
      </NextLink>
      <NextLink href='/contacts'>
        <NavigationItem name='contacts' pageStyle={pageStyle} />
      </NextLink>
      <NextLink href='/blog'>
        <NavigationItem name='blog' pageStyle={pageStyle} />
      </NextLink>
    </Condition>
    <Condition match={pageStyle === 'light'}>
      <NextLink href='/services'>
        <NavigationItem name='services' pageStyle={pageStyle} />
      </NextLink>
      <NextLink href='/prices'>
        <NavigationItem name='prices' pageStyle={pageStyle} />
      </NextLink>
      <NextLink href='/contacts'>
        <NavigationItem name='contacts' pageStyle={pageStyle} />
      </NextLink>
      <NextLink href='/blog'>
        <NavigationItem name='blog' pageStyle={pageStyle} />
      </NextLink>
    </Condition>
  </Box>
)

export { NavigationList }
