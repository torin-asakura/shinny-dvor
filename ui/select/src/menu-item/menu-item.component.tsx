import styled             from '@emotion/styled'
import { FC }             from 'react'
import React              from 'react'

import { Checkbox }       from '@ui/checkbox'
import { Layout }         from '@ui/layout'
import { Column }         from '@ui/layout'
import { Row }            from '@ui/layout'
import { Text }           from '@ui/text'

import { MenuItemProps }  from './menu-item.interface.js'
import { baseItemStyles } from './menu-item.styles.js'

const Container = styled.li(baseItemStyles)

const MenuItem: FC<MenuItemProps> = ({
  children,
  selectedItems,
  addSelectedItem,
  removeSelectedItem,
  ...props
}) => (
  <Container {...props}>
    <Column width='100%'>
      <Row>
        <Layout flexBasis={16} flexShrink={0} />
        <Checkbox
          active={selectedItems?.includes(children)}
          onCheck={(newState) => {
            if (newState) addSelectedItem(children)
            if (!newState) removeSelectedItem(children)
          }}
        >
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
