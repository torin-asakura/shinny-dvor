import React                   from 'react'
import { FC }                  from 'react'

import { Wheel as Background } from './wheel'
import { Knobs }               from './knobs'

const Wheel: FC = () => (
  <Background>
    <Knobs />
  </Background>
)

export { Wheel }
