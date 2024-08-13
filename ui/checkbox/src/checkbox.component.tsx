import { createCheckBaseStyles }       from '@atls-ui-parts/checkbox'
import { createCheckAppearanceStyles } from '@atls-ui-parts/checkbox'
import { createCheckShapeStyles }      from '@atls-ui-parts/checkbox'
import styled                          from '@emotion/styled'
import { FC }                          from 'react'
import React                           from 'react'

import { CheckIcon }                   from '@ui/icons'

import { CheckboxProps }               from './checkbox.interface.js'
import { Box }                         from './box/index.js'
import { Container }                   from './container/index.js'
import { Label }                       from './label/index.js'

const doNothing = (...args) => {
  // do nothing
}

const Checkbox: FC<CheckboxProps> = ({ children, active, onCheck = (newState) => doNothing() }) => {
  const Checkmark = styled.div(
    createCheckBaseStyles(),
    createCheckAppearanceStyles({
      color: 'white',
    }),
    createCheckShapeStyles({
      size: 20,
    })
  )
  return (
    <Container onClick={() => onCheck(!active)}>
      <Box checked={active}>
        <Checkmark>
          <CheckIcon width={17} height={18} />
        </Checkmark>
      </Box>
      <Label>{children}</Label>
    </Container>
  )
}

export { Checkbox }
