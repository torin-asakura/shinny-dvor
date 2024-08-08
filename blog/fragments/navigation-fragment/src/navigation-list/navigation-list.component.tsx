import React                   from 'react'
import { FC }                  from 'react'

import { Box }                 from '@ui/layout'
import { Layout }              from '@ui/layout'

import { Item }                from './item/index.js'
import { NavigationListProps } from './navigation-list.interface.js'

const NavigationList: FC<NavigationListProps> = ({ navigation }) => (
  <Box width='100%' justifyContent='space-between' flexWrap='wrap'>
    {navigation.map(({ contentAddons: { title, content } }) => (
      <Layout key={title}>
        <Item content={content} title={title} />
      </Layout>
    ))}
  </Box>
)

export { NavigationList }
