export interface SmoothOptions {
  duration?: number
  pattern?: 'in-and-out' | 'in' | 'out'
}

export interface ConditionProps {
  match: boolean
  smooth?: boolean
  smoothOptions?: SmoothOptions
  children?: any
}
