import { getBaseStyles }  from './styles/index.js'
import { getShapeStyles } from './styles/index.js'

export const baseStyles = getBaseStyles()

export const shapeStyles = ({ theme }) => getShapeStyles(theme)
