export type OpacityTypes = 'large' | 'none' | 'small'

export interface LayerProps {
  children: any
  visible: boolean
  onClose: (...args: Array<any>) => void
  scroll?: boolean
  opacity?: OpacityTypes
  center?: boolean
  top?: number
  left?: number
}
