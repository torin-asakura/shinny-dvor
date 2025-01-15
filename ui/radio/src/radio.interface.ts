import type { InputHTMLAttributes } from 'react'

export interface RadioProps extends InputHTMLAttributes<null> {
  checked: boolean
  textTransform?: 'lowercase' | 'uppercase'
}
