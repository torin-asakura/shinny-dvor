import styled         from '@emotion/styled'

import { ImageProps } from './image.interface.js'
import { baseStyles } from './image.styles.js'

const Image = styled.img<ImageProps>(baseStyles)

export { Image }
