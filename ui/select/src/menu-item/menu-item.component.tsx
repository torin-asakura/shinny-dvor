import type { MenuItemProps } from './menu-item.interface.js'
import type { FC }            from 'react'

import styled                 from '@emotion/styled'

import React                  from 'react'

import { Checkbox }           from '@ui/checkbox'
import { Layout }             from '@ui/layout'
import { Column }             from '@ui/layout'
import { Row }                from '@ui/layout'
import { Text }               from '@ui/text'

import { baseItemStyles }     from './menu-item.styles.js'

const Container = styled.li(baseItemStyles)

const MenuItem: FC<MenuItemProps> = ({
  children,
  selectedItems,
  addSelectedItem,
  removeSelectedItem,
  ...props
}) => {
  const handleCheck = (newState: boolean): void => {
    if (newState) addSelectedItem(children)
    if (!newState) removeSelectedItem(children)
  }

  return (
    <Container {...props}>
      <Column width='100%'>
        <Row>
          <Layout flexBasis={16} flexShrink={0} />
          <Checkbox active={selectedItems?.includes(children)} onCheck={handleCheck}>
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
}
export { MenuItem }
