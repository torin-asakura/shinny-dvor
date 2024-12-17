import React                        from 'react'

import { memo }               from 'react'

import { Text }                     from '@ui/text'

import { CheckmarkProps }            from './checkmark.interfaces.js'
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
