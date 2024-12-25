import type { RadioProps } from './radio.interface.js'

import React               from 'react'
import { memo }            from 'react'

import { Layout }          from '@ui/layout'
import { Column }          from '@ui/layout'

import { Checkmark }       from './checkmark/index.js'
import { Container }       from './container/index.js'

const Radio = memo(({ children, checked, textTransform = 'lowercase' }: RadioProps) => (
  <Column width='100%'>
    <Container checked={checked}>
      <Checkmark checked={checked} textTransform={textTransform}>
        {children}
      </Checkmark>
    </Container>
  </Column>
))

export { Radio }
