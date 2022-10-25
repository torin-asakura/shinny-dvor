import { getBaseStyles }  from './styles'
import { getShapeStyles } from './styles'

export const baseStyles = getBaseStyles()

export const shapeStyles = ({ theme }) => getShapeStyles(theme)
