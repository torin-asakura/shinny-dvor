import React          from 'react'

import { ImageBlock } from '@ui/image'

import { Container }  from './container'

const Image = () => (
  <Container>
    <ImageBlock width='100%' height='100%' src='https://i.imgur.com/R71hGpq.png' alt='wheel' />
  </Container>
)

export { Image }
