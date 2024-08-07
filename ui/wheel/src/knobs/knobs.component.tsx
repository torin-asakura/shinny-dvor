import React          from 'react'
import { FC }         from 'react'

import { Container }  from './container/index.js'
import { Knob }       from './knob/index.js'
import { KnobsProps } from './knobs.interface.js'

const Knobs: FC<KnobsProps> = ({ titles }) => (
  <Container>
    <Knob left={[235, 235, 281]} top={[24, 24, 26]} text={titles.get('titleTop')} />
    <Knob left={[43, 43, 65]} top={[108, 108, 151]} text={titles.get('titleMiddle')} />
    <Knob left={[92, 92, 129]} top={[185, 185, 259]} text={titles.get('titleBottom')} />
  </Container>
)

export { Knobs }
