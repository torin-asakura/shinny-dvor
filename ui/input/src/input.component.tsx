import type { InputProps } from './input.interfaces.js'

import { RawInput }        from '@atls-ui-parts/input'

import React               from 'react'
import { forwardRef }      from 'react'

import { Divider }         from '@ui/divider'
import { Layout }          from '@ui/layout'
import { Column }          from '@ui/layout'

import { baseStyles }      from './input.css.js'

export const Input = forwardRef<HTMLInputElement, InputProps>((
  { type, disabled, value, onChange, onChangeNative, ...props },
  ref
) => {
  const onChangeValue = (e) => {
    onChange(e.target.value)
  }

  return (
    <Column width='100%' gap='$g16'>
      <RawInput
        ref={ref}
        className={baseStyles}
        type={type}
        disabled={disabled}
        value={value}
        onChange={onChangeValue}
        {...props}
      />
      <Divider color={value !== '' ? '$primaryBlue' : '$gray'} />
    </Column>
  )
})
