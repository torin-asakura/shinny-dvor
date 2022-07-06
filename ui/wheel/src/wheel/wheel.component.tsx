import React         from 'react'
import { FC }        from 'react'

import { Container } from './container'
import { Image }     from './image'

const Wheel: FC = ({ children }) => (
  <Container>
    <Image />
    {children}
  </Container>
)

export { Wheel }
