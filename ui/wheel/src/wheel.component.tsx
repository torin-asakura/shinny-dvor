import React                   from 'react'
import { FC }                  from 'react'

import { Knobs }               from './knobs'
import { Wheel as Background } from './wheel'
import { WheelProps }          from './wheel.interface'

const Wheel: FC<WheelProps> = ({ titles }) => (
  <Background>
    <Knobs titles={titles} />
  </Background>
)

export { Wheel }
