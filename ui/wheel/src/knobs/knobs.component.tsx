import React         from 'react'
import { FC }        from 'react'

import { Container } from './container'
import { Knob }      from './knob'

const Knobs: FC = () => (
  <Container>
    <Knob left={[235, 235, 281]} top={[24, 24, 26]} text='text1' />
    <Knob left={[43, 43, 65]} top={[108, 108, 151]} text='text2' />
    <Knob left={[92, 92, 129]} top={[185, 185, 259]} text='text3' />
  </Container>
)

export { Knobs }
