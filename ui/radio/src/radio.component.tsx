import React          from 'react'
import { FC }         from 'react'

import { Text }       from '@ui/text'
import { Layout }     from '@ui/layout'
import { Column }     from '@ui/layout'

import { RadioProps } from './radio.interface'
import { Container }  from './container'

const Radio: FC<RadioProps> = ({ checked, value, onClick, ...props }) => (
  <Column width='100%'>
    <Container onClick={onClick} checked={checked}>
      <input type='radio' {...props} checked={checked} />
      <Text fontWeight='bold'>{value}</Text>
    </Container>
    <Layout flexBasis={12} />
  </Column>
)

export { Radio }
