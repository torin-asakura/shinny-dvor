import React                   from 'react'
import { FC }                  from 'react'

import { Knobs }               from './knobs'
import { Wheel as Background } from './wheel'

const Wheel: FC = () => (
  <Background>
    <Knobs />
  </Background>
)

export { Wheel }
