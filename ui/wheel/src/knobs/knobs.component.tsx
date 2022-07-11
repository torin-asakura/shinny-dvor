import React          from 'react'
import { FC }         from 'react'

import { Container }  from './container'
import { Knob }       from './knob'
import { KnobsProps } from './knobs.interface'

const Knobs: FC<KnobsProps> = ({ titles }) => (
  <Container>
    <Knob left={[235, 235, 281]} top={[24, 24, 26]} text={titles.titleTop} />
    <Knob left={[43, 43, 65]} top={[108, 108, 151]} text={titles.titleMiddle} />
    <Knob left={[92, 92, 129]} top={[185, 185, 259]} text={titles.titleBottom} />
  </Container>
)

export { Knobs }
