import React                         from 'react'
import { FC }                        from 'react'

import { Box }                       from '@ui/layout'
import { Row }                       from '@ui/layout'
import { Layout }                    from '@ui/layout'
import { Column }                    from '@ui/layout'

import { Item }                      from './item'
import { NavigationListMobileProps } from './navigation-list-mobile.interface'

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
