import type { ContainerProps } from './container.interface.js'

import styled                  from '@emotion/styled'

import { Box }                 from '@ui/layout'

import { baseStyles }          from './container.styles.js'
import { shapeStyles }         from './container.styles.js'

const Container = styled(Box)<ContainerProps>(baseStyles, shapeStyles)

export { Container }
