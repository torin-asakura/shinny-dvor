import styled             from '@emotion/styled'

import { Box }            from '@ui/layout'

import { baseStyles }     from './container.styles'
import { shapeStyles }    from './container.styles'
import { ContainerProps } from './container.interface'

const Container = styled(Box)<ContainerProps>(baseStyles, shapeStyles)

export { Container }
