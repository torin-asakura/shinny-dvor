import { InputHTMLAttributes } from 'react'

export interface SelectProps extends Omit<InputHTMLAttributes<any>, 'onChange'> {
  items: string[]
  value?: string
  setIsSelected?: (isSelected: string) => void
  onChange: (item: string) => void
  placeholder?: string
}
