import { InputHTMLAttributes } from 'react'

export interface SelectProps extends Omit<InputHTMLAttributes<any>, 'onChange'> {
  items: string[]
  value?: string
  isSelected?: boolean
  setIsSelected?: (isSelected: boolean) => void
  onChange: (item: string) => void
  placeholder?: string
}
