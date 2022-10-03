import React                         from 'react'
import { FC }                        from 'react'

import { Box }                       from '@ui/layout'
import { Row }                       from '@ui/layout'
import { Layout }                    from '@ui/layout'
import { Column }                    from '@ui/layout'
import { NextNavLink }               from '@ui/link'
import { Text }                      from '@ui/text'

import { NavigationListMobileProps } from './navigation-list-mobile.interface'
import { getColor }                  from '../helpers'
import { getColorBackground }        from '../helpers'

const NavigationListMobile: FC<NavigationListMobileProps> = ({ active, navigation }) => (
  <Box backgroundColor={getColorBackground(active!)} style={{ transition: '.2s' }}>
    <Layout flexBasis={20} flexShrink={0} />
    <Column fill>
      {navigation.map(({ title, content }, index) => (
        <React.Fragment key={title}>
          <Row>
            <NextNavLink path={content}>
              <Text color={getColor(active!)} fontWeight='medium'>
                {title}
              </Text>
            </NextNavLink>
          </Row>
          <Layout flexBasis={navigation.length - 1 !== index ? 24 : 0} />
        </React.Fragment>
      ))}
      <Layout flexBasis={32} />
    </Column>
  </Box>
)

export { NavigationListMobile }
