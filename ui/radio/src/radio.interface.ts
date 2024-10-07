import type { InputHTMLAttributes } from 'react'

export interface RadioProps extends InputHTMLAttributes<any> {
  checked: boolean
  textTransform?: 'lowercase' | 'uppercase'
}
