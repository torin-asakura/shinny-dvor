import React             from 'react'

import { memo }    from 'react'

import { Checkbox }      from '@ui/checkbox'
import { Layout }        from '@ui/layout'
import { Row }           from '@ui/layout'
import { Text }          from '@ui/text'

import { MenuItemProps } from './menu-item.interface.js'
import { menuItemBase }  from './menu-item.css.js'

export const MenuItem = memo(({
  children,
  selectedItems,
  addSelectedItem,
  removeSelectedItem,
  ...props
}: MenuItemProps) => {
  const handleCheck = (newState: boolean): void => {
    if (newState) addSelectedItem(children)
    if (!newState) removeSelectedItem(children)
  }

  return (
    <li className={menuItemBase} {...props}>
      <Row>
        <Layout flexBasis={16} flexShrink={0} />
        <Checkbox active={selectedItems?.includes(children)} onCheck={handleCheck}>
          <Layout>
            <Text fontSize='$medium' color='$black'>
              {children}
            </Text>
          </Layout>
        </Checkbox>
        <Layout flexBasis={16} flexShrink={0} />
      </Row>
    </li>
  )
})
