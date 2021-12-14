import { InputHTMLAttributes } from 'react'

export interface RadioProps extends InputHTMLAttributes<any> {
  active?: boolean
  checked: boolean
}

export interface RadioListProps {
  items: string[]
  initial?: string
  width?: number | number[] | string | string[]
  onChoose?: (item: string) => any
}
