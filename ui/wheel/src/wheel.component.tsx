import type { FC }             from 'react'

import type { WheelProps }     from './wheel.interface.js'

import React                   from 'react'

import { Knobs }               from './knobs/index.js'
import { Wheel as Background } from './wheel/index.js'

export const Wheel: FC<WheelProps> = ({ titles, wheelImg }) => (
  <Background wheelImg={wheelImg}>
    <Knobs titles={titles} />
  </Background>
)
