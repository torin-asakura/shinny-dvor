import type { FC }               from 'react'

import type { CarBodyItemProps } from './car-body-item.interface.js'

import React                     from 'react'

import { Button }                from '@ui/button'
import { Box }                   from '@ui/layout'
import { Text }                  from '@ui/text'

export const CarBodyItem: FC<CarBodyItemProps> = ({ item, onCarBody, setOnCarBody }) => {
  if (item) {
    return (
      <Box
        key={item}
        width='100%'
        height='100%'
        alignItems='center'
        justifyContent='center'
        borderRadius='$small'
        overflow='hidden'
        backgroundColor={onCarBody === item ? '$primaryBlue' : '$fillGray'}
      >
        <Button
          variant='transparent'
          size='fill'
          onClick={() => {
            setOnCarBody(item)
          }}
        >
          <Text
            color={onCarBody === item ? '$white' : '$black'}
            fontWeight='$semiBold'
            fontSize='$small'
          >
            {item}
          </Text>
        </Button>
      </Box>
    )
  }

  return null
}
