import React                         from 'react'
import { FC }                        from 'react'
import { useRouter }                 from 'next/router'

import { Box }                       from '@ui/layout'
import { Row }                       from '@ui/layout'
import { Layout }                    from '@ui/layout'
import { Column }                    from '@ui/layout'
import { NextNavLink }               from '@ui/link'
import { Text }                      from '@ui/text'

import { NavigationListMobileProps } from './navigation-list-mobile.interface'
import { getColor }                  from '../helpers'
import { getColorBackground }        from '../helpers'

const NavigationListMobile: FC<NavigationListMobileProps> = ({ active, navigation }) => {
  const router = useRouter()

  return (
    <Box backgroundColor={getColorBackground(active!)} style={{ transition: '.2s' }}>
      <Layout flexBasis={20} flexShrink={0} />
      <Column fill>
        {navigation.map(({ contentAddons: { title, content } }, index) => (
          <React.Fragment key={title}>
            <Row>
              <NextNavLink path={content}>
                <Text color={router.route === '/' ? getColor(active) : ''} fontWeight='medium'>
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
}

export { NavigationListMobile }
