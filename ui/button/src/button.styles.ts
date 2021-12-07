import { getBaseStyles }       from './styles'
import { getAppearanceStyles } from './styles'
import { getShapeStyles }      from './styles'

export const baseStyles = getBaseStyles()

export const appearanceStyles = getAppearanceStyles()

export const shapeStyles = ({ theme }) => getShapeStyles(theme)
