import React          from 'react'
import { FC }         from 'react'

import { Text }       from '@ui/text'

import { RadioProps } from './radio.interface'
import { Container }  from './container'

const Radio: FC<RadioProps> = ({ checked, value, onClick, ...props }) => (
  <Container onClick={onClick} checked={checked}>
    <input type='radio' {...props} checked={checked} />
    <Text fontWeight='bold'>{value}</Text>
  </Container>
)

export { Radio }
