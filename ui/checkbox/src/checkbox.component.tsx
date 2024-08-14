import { createCheckBaseStyles }       from '@atls-ui-parts/checkbox'
import { createCheckAppearanceStyles } from '@atls-ui-parts/checkbox'
import { createCheckShapeStyles }      from '@atls-ui-parts/checkbox'
import styled                          from '@emotion/styled'
import { FC }                          from 'react'
import React                           from 'react'

import { CheckIcon }                   from '@ui/icons'

import { Box }                         from './box/index.js'
import { CheckboxProps }               from './checkbox.interface.js'
import { Container }                   from './container/index.js'
import { Label }                       from './label/index.js'

const doNothing = () => {
  // do nothing
}

const Checkmark = styled.div(
  createCheckBaseStyles(),
  createCheckAppearanceStyles({
    color: 'white',
  }),
  createCheckShapeStyles({
    size: 20,
  })
)

export const Checkbox: FC<CheckboxProps> = ({ children, active, onCheck = () => doNothing() }) => (
  <Container onClick={() => onCheck(!active)}>
    <Box checked={active}>
      <Checkmark>
        <CheckIcon width={17} height={18} />
      </Checkmark>
    </Box>
    <Label>{children}</Label>
  </Container>
)
