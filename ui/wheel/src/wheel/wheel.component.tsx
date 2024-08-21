import type { WheelImg }          from '../wheel.interface.js'
import type { PropsWithChildren } from 'react'
import type { FC }                from 'react'

import React                      from 'react'

import { Container }              from './container/index.js'
import { Image }                  from './image/index.js'

const Wheel: FC<PropsWithChildren<WheelImg>> = ({ children, wheelImg }) => (
  <Container>
    <Image wheelImg={wheelImg} />
    {children}
  </Container>
)

export { Wheel }
