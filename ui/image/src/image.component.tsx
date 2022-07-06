import styled         from '@emotion/styled'

import { ImageProps } from './image.interface'
import { baseStyles } from './image.styles'

const Image = styled.img<ImageProps>(baseStyles)

export { Image }
