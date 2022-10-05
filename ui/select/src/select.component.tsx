import { useSelect }                       from '@atls-ui-parts/select'

import React                               from 'react'
import { FC }                              from 'react'
import { useMultipleSelection }            from 'downshift'
import { useSelect as useDownshiftSelect } from 'downshift'

import { DropDownIcon }                    from '@ui/icons'
import { Layout }                          from '@ui/layout'
import { Text }                            from '@ui/text'

import { Button }                          from './button'
import { Menu }                            from './menu'
import { MenuItem }                        from './menu-item'
import { SelectProps }                     from './select.interface'

const Select: FC<SelectProps> = ({ items, value, onChange, onSelect, placeholder }) => {
  const { addSelectedItem, removeSelectedItem, selectedItems } = useMultipleSelection()

  if (onSelect) {
    onSelect(selectedItems)
  }

  const { buttonProps, menuProps, renderMenu, selectedItem } = useSelect({
    items,
    onChange,
    stateReducer: (state, actionAndChanges) => {
      const { changes, type } = actionAndChanges
      if (type === useDownshiftSelect.stateChangeTypes.ItemClick) {
        return {
          ...changes,
          isOpen: true,
        }
      }

      return changes
    },
    onStateChange: ({ type, selectedItem: selected }) => {
      if (type === useDownshiftSelect.stateChangeTypes.ItemClick) {
        if (selected) {
          addSelectedItem(selected)
        }
      }
    },
  })

  return (
    <>
      <Button isSelected={!!selectedItem} value={value} {...buttonProps}>
        <Text textAlign='start'>{value?.join(', ') || selectedItem || placeholder}</Text>
        <Layout flexGrow={1} />
        <Layout>
          <DropDownIcon width={16} height={16} />
        </Layout>
      </Button>
      {renderMenu(
        <Menu {...menuProps}>
          {items.map((item) => (
            <MenuItem
              selectedItems={selectedItems}
              addSelectedItem={addSelectedItem}
              removeSelectedItem={removeSelectedItem}
            >
              {item}
            </MenuItem>
          ))}
        </Menu>
      )}
    </>
  )
}

export { Select }
