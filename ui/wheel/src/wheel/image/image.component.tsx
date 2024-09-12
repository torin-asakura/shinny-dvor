import type { ImageProps } from './image.interface.js'
import type { FC }         from 'react'

import React               from 'react'

import { ImageBlock }      from '@ui/image'

import { Container }       from './container/index.js'

const Image: FC<ImageProps> = ({ wheelImg }) => (
  <Container>
    <ImageBlock
      width={440}
      height={440}
      // @ts-expect-error undefined
      src={wheelImg.get('sourceUrl')}
      // @ts-expect-error undefined
      alt={wheelImg.get('altText')}
    />
  </Container>
)

export { Image }
