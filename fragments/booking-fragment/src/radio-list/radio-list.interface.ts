import { BoxProps } from '@ui/layout'

export interface RadioListProps {
  items: Array<string>
  selectedItem: string
  setSelectedItem: (selectedItem: string) => void
  width?: BoxProps['width']
  textTransform?: 'lowercase' | 'uppercase'
}
