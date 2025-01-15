import type { InputHTMLAttributes } from 'react'
import type { Dispatch }            from 'react'
import type { SetStateAction }      from 'react'

export interface SelectProps extends Omit<InputHTMLAttributes<null>, 'onChange' | 'onSelect'> {
  items: Array<string>
  value?: Array<string>
  onChange?: (item: string) => void
  onSelect?: Dispatch<SetStateAction<Array<string>>>
  placeholder?: string
  selectedDefault?: string
  setIsOpen?: Dispatch<SetStateAction<boolean>>
}
