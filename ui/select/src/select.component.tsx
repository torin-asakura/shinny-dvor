import { useSelect }                       from '@atls-ui-parts/select'

import React                               from 'react'
import { FC }                              from 'react'
import { useMultipleSelection }            from 'downshift'
import { useSelect as useDownshiftSelect } from 'downshift'

import { DropDownIcon }                    from '@ui/icons'
import { Layout }                          from '@ui/layout'
import { Text }                            from '@ui/text'

import { ArrowContainer }                  from './arrow-container'
import { Button }                          from './button'
import { Menu }                            from './menu'
import { MenuItem }                        from './menu-item'
import { SelectProps }                     from './select.interface'

const Select: FC<SelectProps> = ({
  items,
  selectedDefault,
  value,
  onChange,
  onSelect,
  placeholder,
}) => {
  const { addSelectedItem, removeSelectedItem, selectedItems } = useMultipleSelection({
    initialSelectedItems: selectedDefault !== undefined ? [selectedDefault] : [],
  })

  if (onSelect) {
    onSelect(selectedItems)
  }

  const { buttonProps, menuProps, renderMenu, selectedItem, isOpen } = useSelect({
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
        <ArrowContainer isOpen={isOpen}>
          <DropDownIcon width={16} height={16} />
        </ArrowContainer>
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
