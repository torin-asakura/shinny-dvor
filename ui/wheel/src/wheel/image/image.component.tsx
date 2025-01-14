import type { FC }         from 'react'

import type { ImageProps } from './image.interface.js'

import React               from 'react'

import { ImageBlock }      from '@ui/image'

import { Container }       from './container/index.js'

const Image: FC<ImageProps> = ({ wheelImg }) => (
  <Container>
    <ImageBlock
      width={440}
      height={440}
      src={wheelImg.get('sourceUrl')}
      alt={wheelImg.get('altText')}
    />
  </Container>
)

export { Image }
