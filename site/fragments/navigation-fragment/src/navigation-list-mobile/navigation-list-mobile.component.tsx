import React               from 'react'
import { FC }              from 'react'

import { Box }             from '@ui/layout'
import { Row }             from '@ui/layout'
import { Layout }          from '@ui/layout'
import { Column }          from '@ui/layout'
import { NextNavLink }     from '@ui/link'
import { Text }            from '@ui/text'

import { NavigationProps } from '../navigation.interface'

const NavigationListMobile: FC<NavigationProps> = ({ navigation }) => (
  <Box backgroundColor='white'>
    <Layout flexBasis={20} flexShrink={0} />
    <Column>
      {navigation.map(({ contentAddons: { title, content } }, index) => (
        <React.Fragment key={title}>
          <Row>
            <NextNavLink path={content}>
              <Text fontWeight='medium'>{title}</Text>
            </NextNavLink>
          </Row>
          <Layout flexBasis={navigation.length - 1 !== index ? 24 : 0} />
        </React.Fragment>
      ))}
      <Layout flexBasis={32} />
    </Column>
    <Layout flexBasis={20} flexShrink={0} />
  </Box>
)

export { NavigationListMobile }
