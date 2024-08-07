import React          from 'react'
import { FC }         from 'react'

import { ImageBlock } from '@ui/image'

import { Container }  from './container/index.js'
import { ImageProps } from './image.interface.js'

const Image: FC<ImageProps> = ({ wheelImg }) => (
  <Container>
    <ImageBlock
      width='100%'
      height='100%'
      src={wheelImg.get('sourceUrl')}
      alt={wheelImg.get('altText')}
    />
  </Container>
)

export { Image }
