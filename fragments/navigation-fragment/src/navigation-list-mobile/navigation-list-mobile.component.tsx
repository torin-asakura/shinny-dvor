import type { FC }                        from 'react'

import type { NavigationListMobileProps } from './navigation-list-mobile.interface.js'

import React                              from 'react'

import { Box }                            from '@ui/layout'
import { Layout }                         from '@ui/layout'
import { Column }                         from '@ui/layout'

import { Item }                           from './item/index.js'
import { getColorBackground }             from '../helpers/index.js'

const NavigationListMobile: FC<NavigationListMobileProps> = ({ scrollY, active, navigation }) => (
  <Box backgroundColor={getColorBackground(active, scrollY)} style={{ transition: '.2s' }}>
    <Layout flexBasis={20} flexShrink='0' />
    <Column fill>
      {navigation.map(({ contentAddons: { title, content } }, index) => (
        <React.Fragment key={title}>
          <Item scrollY={scrollY} active={active} content={content} title={title} />
          <Layout flexBasis={navigation.length - 1 !== index ? 24 : 0} />
        </React.Fragment>
      ))}
      <Layout flexBasis={32} />
    </Column>
  </Box>
)

export { NavigationListMobile }
