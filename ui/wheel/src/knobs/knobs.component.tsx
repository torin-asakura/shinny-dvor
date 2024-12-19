import type { FC }         from 'react'

import type { KnobsProps } from './knobs.interface.js'

import React               from 'react'

import { Container }       from './container/index.js'
import { Knob }            from './knob/index.js'

export const Knobs: FC<KnobsProps> = ({ titles }) => (
  <Container>
    <Knob
      left={{ mobile: '235px', tablet: '235px', desktop: '281px' }}
      top={{ mobile: '24px', tablet: '24px', desktop: '26px' }}
      text={titles.get('titleTop')}
    />
    <Knob
      left={{ mobile: '43px', tablet: '43px', desktop: '65px' }}
      top={{ mobile: '108px', tablet: '108px', desktop: '151px' }}
      text={titles.get('titleMiddle')}
    />
    <Knob
      left={{ mobile: '92px', tablet: '92px', desktop: '129px' }}
      top={{ mobile: '185px', tablet: '185px', desktop: '259px' }}
      text={titles.get('titleBottom')}
    />
  </Container>
)
