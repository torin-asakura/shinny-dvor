import styled               from '@emotion/styled'

import { positionStyles }   from './label.styles'
import { appearanceStyles } from './label.styles'
import { shapeStyles }      from './label.styles'

const Label = styled.div(positionStyles, shapeStyles, appearanceStyles)

export { Label }
