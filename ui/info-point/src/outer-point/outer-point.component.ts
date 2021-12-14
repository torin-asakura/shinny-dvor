import styled               from '@emotion/styled'

import { Box }              from '@ui/layout'

import { baseStyles }       from './outer-point.styles'
import { appearanceStyles } from './outer-point.styles'
import { shapeStyles }      from './outer-point.styles'
import { OuterPointProps }  from './outer-point.interface'

const OuterPoint = styled(Box)<OuterPointProps>(baseStyles, shapeStyles, appearanceStyles)

export { OuterPoint }
