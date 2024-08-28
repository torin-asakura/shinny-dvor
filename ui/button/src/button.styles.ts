import type { styleFn }   from 'styled-system'

import { getBaseStyles }  from './styles/index.js'
import { getShapeStyles } from './styles/index.js'

export const baseStyles = getBaseStyles()

export const shapeStyles: styleFn = ({ theme }) => getShapeStyles(theme)
