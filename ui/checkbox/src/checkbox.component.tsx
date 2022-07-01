import styled                          from '@emotion/styled'
import { createCheckBaseStyles }       from '@atls-ui-parts/checkbox'
import { createCheckAppearanceStyles } from '@atls-ui-parts/checkbox'
import { createCheckShapeStyles }      from '@atls-ui-parts/checkbox'

import React                           from 'react'
import { FC }                          from 'react'

import { CheckIcon }                   from '@ui/icons'

import { CheckboxProps }               from '../checkbox.interface'
import { Box }                         from './box'
import { Container }                   from './container'
import { Label }                       from './label'

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
          <CheckIcon width={20} height={20} />
        </Checkmark>
      </Box>
      <Label>{children}</Label>
    </Container>
  )
}

export { Checkbox }
