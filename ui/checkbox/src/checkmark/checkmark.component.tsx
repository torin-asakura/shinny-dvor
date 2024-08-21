import styled                          from '@emotion/styled'
import { createCheckBaseStyles }       from '@atls-ui-parts/checkbox'
import { createCheckAppearanceStyles } from '@atls-ui-parts/checkbox'
import { createCheckShapeStyles }      from '@atls-ui-parts/checkbox'

export const Checkmark = styled.div(
  createCheckBaseStyles(),
  createCheckAppearanceStyles({
    color: 'white',
  }),
  createCheckShapeStyles({
    size: 20,
  })
)
