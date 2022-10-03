import React                   from 'react'
import { FC }                  from 'react'

import { Box }                 from '@ui/layout'
import { Layout }              from '@ui/layout'
import { NextNavLink }         from '@ui/link'

import { NavigationItem }      from '../navigation-item'
import { NavigationListProps } from './navigation-list.interface'

const NavigationList: FC<NavigationListProps> = ({ active, navigation }) => (
  <Box width='100%' justifyContent='space-between' flexWrap='wrap'>
    {navigation.map(({ title, content }) => (
      <Layout>
        <NextNavLink path={content}>
          <NavigationItem name={title} active={active} />
        </NextNavLink>
      </Layout>
    ))}
  </Box>
)

export { NavigationList }
