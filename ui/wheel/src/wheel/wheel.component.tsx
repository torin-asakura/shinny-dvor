import React          from 'react'
import { FC }         from 'react'

import { Container }  from './container'
import { Image }      from './image'
import { WheelProps } from './wheel.interface'

const Wheel: FC<WheelProps> = ({ children, wheelImg }) => (
  <Container>
    <Image wheelImg={wheelImg} />
    {children}
  </Container>
)

export { Wheel }
