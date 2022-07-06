import styled             from '@emotion/styled'

import { Box }            from '@ui/layout'

import { ContainerProps } from './container.interface'
import { baseStyles }     from './container.styles'
import { shapeStyles }    from './container.styles'

const Container = styled(Box)<ContainerProps>(baseStyles, shapeStyles)

export { Container }
