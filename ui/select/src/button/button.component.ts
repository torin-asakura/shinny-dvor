import styled                   from '@emotion/styled'

import { baseStyles }           from './button.styles'
import { shapeStyles }          from './button.styles'
import { appearanceStyles }     from './button.styles'
import { baseSelectStyles }     from './button.styles'
import { createPreventDefault } from './prevent-default'

const Button = createPreventDefault(
  styled.button(baseStyles, baseSelectStyles, shapeStyles, appearanceStyles)
)

export { Button }
