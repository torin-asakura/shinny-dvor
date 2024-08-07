import React                   from 'react'
import { FC }                  from 'react'

import { Knobs }               from './knobs/index.js'
import { Wheel as Background } from './wheel/index.js'
import { WheelProps }          from './wheel.interface.js'

const Wheel: FC<WheelProps> = ({ titles, wheelImg }) => (
  <Background wheelImg={wheelImg}>
    <Knobs titles={titles} />
  </Background>
)

export { Wheel }
