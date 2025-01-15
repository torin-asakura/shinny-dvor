import type { MenuItemProps } from './menu-item.interface.js'

import { forwardRef }         from 'react'
import { memo }               from 'react'
import React                  from 'react'

import { Checkbox }           from '@ui/checkbox'
import { Layout }             from '@ui/layout'
import { Row }                from '@ui/layout'
import { Text }               from '@ui/text'

import { menuItemBase }       from './menu-item.css.js'

export const MenuItem = memo(
  forwardRef<HTMLLIElement, MenuItemProps>((
    { children, selectedItems, addSelectedItem, removeSelectedItem, ...props },
    ref
  ) => {
    const handleCheck = (newState: boolean): void => {
      if (newState) addSelectedItem(children)
      if (!newState) removeSelectedItem(children)
    }

    return (
      <li ref={ref} className={menuItemBase} {...props}>
        <Row>
          <Layout flexBasis={16} flexShrink={0} />
          <Checkbox active={selectedItems?.includes(children)} onCheck={handleCheck}>
            <Layout>
              <Text fontSize='$normal.reduced' color='$black'>
                {children}
              </Text>
            </Layout>
          </Checkbox>
          <Layout flexBasis={16} flexShrink={0} />
        </Row>
      </li>
    )
  })
)
