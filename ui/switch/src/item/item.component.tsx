import type { ItemProps }         from './item.interface.js'
import type { FC }                from 'react'
import type { PropsWithChildren } from 'react'

import React                      from 'react'

import { Button }                 from '@ui/button'
import { Box }                    from '@ui/layout'
import { Text }                   from '@ui/text'

import { useActive }              from '../context/index.js'

export const Item: FC<PropsWithChildren<ItemProps>> = ({ children, onSelect, value }) => {
  const active = useActive()

  if (!active) {
    throw new Error('Switch: Missing <Switch> component for <Item>')
  }

  const handleClick = (): void => {
    onSelect(value)
  }

  return (
    <Box
      width='100%'
      height='100%'
      alignItems='center'
      justifyContent='center'
      borderRadius='small'
      backgroundColor={active === value ? 'primaryBlue' : ''}
    >
      <Button color='transparent' size='small' height='100%' width='100%' onClick={handleClick}>
        <Text color={active === value ? 'white' : 'black'} fontWeight='bold' fontSize='small'>
          {children}
        </Text>
      </Button>
    </Box>
  )
}
