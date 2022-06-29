import styled             from '@emotion/styled'

import React              from 'react'
import { FC }             from 'react'

import { Checkbox }       from '@ui/checkbox'
import { Layout }         from '@ui/layout'
import { Column }         from '@ui/layout'
import { Row }            from '@ui/layout'
import { Text }           from '@ui/text'

import { baseItemStyles } from './menu-item.styles'

const Container = styled.li(baseItemStyles)

const MenuItem: FC = ({ children, ...props }) => (
  <Container {...props}>
    <Column width='100%'>
      <Row>
        <Layout flexBasis={16} flexShrink={0} />
        <Checkbox>
          <Layout>
            <Text fontSize='normal' color='black'>
              {children}
            </Text>
          </Layout>
        </Checkbox>
        <Layout flexBasis={16} flexShrink={0} />
      </Row>
    </Column>
  </Container>
)

export { MenuItem }
