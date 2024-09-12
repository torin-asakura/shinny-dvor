import type { ImageProps } from 'next/image.js'
import type { FC }         from 'react'

import Image               from 'next/image.js'
import React               from 'react'

const BaseImage = Image as unknown as FC<ImageProps>

const ImageBlock: FC<ImageProps> = ({ style, ...props }) => {
  return (
    <BaseImage style={{ width: '100%', height: 'auto', objectFit: 'cover', ...style }} {...props} />
  )
}

export { ImageBlock }
