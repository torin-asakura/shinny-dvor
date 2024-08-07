import React         from 'react'
import { FC }        from 'react'

import { Button }    from '@ui/button'
import { Box }       from '@ui/layout'
import { Text }      from '@ui/text'

import { ItemProps } from './item.interface.js'
import { useActive } from '../context/index.js'

const Item: FC<ItemProps> = ({ children, onSelect, value }) => {
  const active = useActive()
  if (!active) {
    throw new Error('Switch: Missing <Switch> component for <Item>')
  }

  return (
    <Box
      width='100%'
      height='100%'
      alignItems='center'
      justifyContent='center'
      borderRadius='small'
      backgroundColor={active === value ? 'primaryBlue' : undefined}
    >
      <Button
        color='transparent'
        size='small'
        height='100%'
        width='100%'
        onClick={() => onSelect(value)}
      >
        <Text color={active === value ? 'white' : 'black'} fontWeight='bold' fontSize='small'>
          {children}
        </Text>
      </Button>
    </Box>
  )
}
export { Item }
