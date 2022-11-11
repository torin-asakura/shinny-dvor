import { createLabelAppearanceStyles } from '@atls-ui-parts/checkbox'
import { createLabelShapeStyles }      from '@atls-ui-parts/checkbox'
import { createLabelPositionStyles }   from '@atls-ui-parts/checkbox'

import { styleFn }                     from 'styled-system'

export const positionStyles: styleFn = createLabelPositionStyles({
  margin: '24px',
})

export const appearanceStyles: styleFn = createLabelAppearanceStyles({
  fontColor: 'black',
})

export const shapeStyles: styleFn = createLabelShapeStyles({
  fontSize: 22,
  fontWeight: 'medium',
  fontFamily: 'primary',
})
