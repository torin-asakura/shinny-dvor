import type { InputHTMLAttributes } from 'react'

export interface SelectProps extends Omit<InputHTMLAttributes<any>, 'onChange'> {
  items: Array<string>
  value?: Array<string>
  onChange?: (item: string) => void
  onSelect?: any
  placeholder?: string
  selectedDefault?: string
  setIsOpen?: (isOpen: boolean) => any
}
