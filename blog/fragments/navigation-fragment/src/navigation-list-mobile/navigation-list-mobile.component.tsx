import { FC }                        from 'react'
import React                         from 'react'

import { Box }                       from '@ui/layout'
import { Row }                       from '@ui/layout'
import { Layout }                    from '@ui/layout'
import { Column }                    from '@ui/layout'

import { Item }                      from './item/index.js'
import { NavigationListMobileProps } from './navigation-list-mobile.interface.js'

const NavigationListMobile: FC<NavigationListMobileProps> = ({ navigation }) => (
  <Box backgroundColor='white' style={{ transition: '.2s' }}>
    <Layout flexBasis={20} flexShrink={0} />
    <Column fill>
      {navigation.map(({ contentAddons: { title, content } }, index) => (
        <React.Fragment key={title}>
          <Row>
            <Item content={content} title={title} />
          </Row>
          <Layout flexBasis={navigation.length - 1 !== index ? 24 : 0} />
        </React.Fragment>
      ))}
      <Layout flexBasis={32} />
    </Column>
  </Box>
)

export { NavigationListMobile }
