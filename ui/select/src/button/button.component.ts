/* eslint-disable */

import styled                   from '@emotion/styled'

import { baseStyles }           from './button.styles.js'
import { shapeStyles }          from './button.styles.js'
import { appearanceStyles }     from './button.styles.js'
import { baseSelectStyles }     from './button.styles.js'
import { createPreventDefault } from './prevent-default.js'

const Button = createPreventDefault(
  styled.button(baseStyles, baseSelectStyles, shapeStyles, appearanceStyles)
)

export { Button }
