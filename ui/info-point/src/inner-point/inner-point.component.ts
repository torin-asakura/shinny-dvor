import styled               from '@emotion/styled'

import { Box }              from '@ui/layout'

import { appearanceStyles } from './inner-point.styles'
import { shapeStyles }      from './inner-point.styles'
import { InnerPointProps }  from './inner-point.interface'

const InnerPoint = styled(Box)<InnerPointProps>(shapeStyles, appearanceStyles)

export { InnerPoint }
