import type { ItemProps }         from './item.interface.js'
import type { FC }                from 'react'
import type { PropsWithChildren } from 'react'

import React                      from 'react'

import { Button }                 from '@ui/button'
import { Box }                    from '@ui/layout'
import { Text }                   from '@ui/text'

import { useActive }              from '../context/index.js'

export const SwitchItem: FC<PropsWithChildren<ItemProps>> = ({ children, onSelect, value }) => {
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
      borderRadius='$small'
      backgroundColor={active === value ? '$primaryBlue' : '$transparent'}
    >
      <Button variant='transparent' size='fill' onClick={handleClick}>
        <Text color={active === value ? '$white' : '$black'} fontWeight='$semiBold'>
          {children}
        </Text>
      </Button>
    </Box>
  )
}
