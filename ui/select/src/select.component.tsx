import type { SelectProps }     from './select.interface.js'

import { useSelect }            from '@atls-utils/use-select'
import { useMultipleSelection } from 'downshift'
import { memo }                 from 'react'
import React                    from 'react'

import { Layout }               from '@ui/layout'
import { TextEllipsis }         from '@ui/text'

import { Arrow }                from './arrow/index.js'
import { Button }               from './button/index.js'
import { MenuItem }             from './menu-item/index.js'
import { Menu }                 from './menu/index.js'

const Select = memo(({
  items,
  selectedDefault,
  value,
  onChange,
  onSelect,
  placeholder,
  setIsOpen,
}: SelectProps) => {
  const { addSelectedItem, removeSelectedItem, selectedItems } = useMultipleSelection({
    initialSelectedItems: selectedDefault !== undefined ? [selectedDefault] : [],
  })

  if (onSelect) {
    onSelect(selectedItems)
  }

  const { buttonProps, menuProps, renderMenu, selectedItem, isOpen } = useSelect({
    items,
    onChange,
  })

  if (isOpen && setIsOpen) setIsOpen(true)
  if (!isOpen && setIsOpen) setIsOpen(false)

  return (
    <>
      <Button isSelected={!!selectedItem} value={value} {...buttonProps}>
        <TextEllipsis lineClamp={1} textAlign='start'>
          {value?.join(', ') || selectedItem || placeholder}
        </TextEllipsis>
        <Layout flexGrow={1} />
        <Arrow isOpen={isOpen} />
      </Button>
      {renderMenu(
        <Menu {...menuProps}>
          {items.map((item, index) => (
            <MenuItem
              // eslint-disable-next-line react/no-array-index-key
              key={`menu-item-${index}`}
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
})

export { Select }
