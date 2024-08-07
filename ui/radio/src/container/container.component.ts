import styled               from '@emotion/styled'

import { Box }              from '@ui/layout'

import { ContainerProps }   from './container.interface.js'
import { baseStyles }       from './container.styles.js'
import { appearanceStyles } from './container.styles.js'
import { shapeStyles }      from './container.styles.js'

const Container = styled(Box)<ContainerProps>(baseStyles, shapeStyles, appearanceStyles)

export { Container }
