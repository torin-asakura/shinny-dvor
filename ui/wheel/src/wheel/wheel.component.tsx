import { FC }         from 'react'
import React          from 'react'

import { Container }  from './container/index.js'
import { Image }      from './image/index.js'
import { WheelProps } from './wheel.interface.js'

const Wheel: FC<WheelProps> = ({ children, wheelImg }) => (
  <Container>
    <Image wheelImg={wheelImg} />
    {children}
  </Container>
)

export { Wheel }
