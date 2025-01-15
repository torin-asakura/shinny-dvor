import type { CheckmarkProps }       from './checkmark.interfaces.js'

import { memo }                      from 'react'
import React                         from 'react'

import { Text }                      from '@ui/text'

import { checkmarkAppearanceStyles } from './checkmark.css.js'

export const Checkmark = memo(({
  checked,
  textTransform = 'lowercase',
  children,
}: CheckmarkProps) => (
  <div className={checkmarkAppearanceStyles({ checked })}>
    <Text textTransform={textTransform} fontSize='$small' fontWeight='$medium'>
      {children}
    </Text>
  </div>
))
