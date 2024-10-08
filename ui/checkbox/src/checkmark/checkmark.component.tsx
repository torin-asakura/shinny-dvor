/* eslint-disable */

import { createCheckBaseStyles }       from '@atls-ui-parts/checkbox'
import { createCheckAppearanceStyles } from '@atls-ui-parts/checkbox'
import { createCheckShapeStyles }      from '@atls-ui-parts/checkbox'
import styled                          from '@emotion/styled'

export const Checkmark = styled.div(
  createCheckBaseStyles(),
  createCheckAppearanceStyles({
    color: 'white',
  }),
  createCheckShapeStyles({
    size: 20,
  })
)
