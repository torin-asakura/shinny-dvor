import { useSelect }    from '@atls-ui-parts/select'

import React            from 'react'
import { FC }           from 'react'

import { DropDownIcon } from '@ui/icons'
import { Layout }       from '@ui/layout'

import { Button }       from './button'
import { Menu }         from './menu'
import { MenuItem }     from './menu-item'
import { SelectProps }  from './select.interface'

const Select: FC<SelectProps> = ({ items, value, onChange, placeholder }) => {
  const { buttonProps, menuProps, getMenuItemProps, renderMenu, selectedItem } = useSelect({
    items,
    onChange,
  })

  return (
    <>
      <Button isSelected={!!selectedItem} {...buttonProps}>
        {value || selectedItem || placeholder}
        <Layout flexGrow={1} />
        <Layout>
          <DropDownIcon width={16} height={16} />
        </Layout>
      </Button>
      {renderMenu(
        <Menu {...menuProps}>
          {items.map((item, index) => (
            <MenuItem {...getMenuItemProps(item, index)}>{item}</MenuItem>
          ))}
        </Menu>
      )}
    </>
  )
}

export { Select }
