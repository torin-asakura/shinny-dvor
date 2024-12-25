import type { InputProps } from './input.interfaces.js'

import { RawInput }        from '@atls-ui-parts/input'

import React               from 'react'
import { ChangeEvent }     from 'react'
import { forwardRef }      from 'react'

import { Divider }         from '@ui/divider'
import { Column }          from '@ui/layout'

import { baseStyles }      from './input.css.js'

export const Input = forwardRef<HTMLInputElement, InputProps>((
  { type, disabled, value, onChange, onChangeValue, ...props },
  ref
) => {
  const onChangeRaw = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e)
    }
    if (onChangeValue) {
      onChangeValue(e.target.value)
    }
  }

  return (
    <Column width='100%' gap='$g16'>
      <RawInput
        ref={ref}
        className={baseStyles}
        type={type}
        disabled={disabled}
        value={value}
        onChange={onChangeRaw}
        {...props}
      />
      <Divider color={value !== '' ? '$primaryBlue' : '$gray'} />
    </Column>
  )
})
