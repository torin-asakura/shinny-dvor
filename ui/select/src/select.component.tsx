import React             from 'react'
import { FC }            from 'react'
import { useSelect }     from '@atls-ui-parts/select'

import { DropDownIcon }  from '@ui/icons'
import { Layout }        from '@ui/layout'

import { Button }        from './button'
import { Menu }          from './menu'
import { MenuItem }      from './menu-item'
import { SelectProps }   from './select.interface'

const Select: FC<SelectProps> = ({ items,
                                   value,
                                   onChange,
                                   placeholder,
                                   setIsSelected
}) => {
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
        <Menu {...menuProps} onClick={setIsSelected(selectedItem)}>
          {items.map((item, index) => (
            <MenuItem {...getMenuItemProps(item, index)}>{item}</MenuItem>
          ))}
        </Menu>
      )}
    </>
  )
}

export { Select }
