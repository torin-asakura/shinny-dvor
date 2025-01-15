import type { CheckboxProps } from './checkbox.interface.js'

import { memo }               from 'react'
import React                  from 'react'

import { CheckIcon }          from '@ui/icons'

import { Box }                from './box/index.js'
import { Checkmark }          from './checkmark/index.js'
import { Container }          from './container/index.js'
import { Label }              from './label/index.js'

export const Checkbox = memo(({ children, active, onCheck }: CheckboxProps) => {
  const handleClick = (): void => {
    if (onCheck) {
      onCheck(!active)
    }
  }

  return (
    <Container onClick={handleClick}>
      <Box checked={active}>
        <Checkmark>
          <CheckIcon width={17} height={18} />
        </Checkmark>
      </Box>
      <Label>{children}</Label>
    </Container>
  )
})
