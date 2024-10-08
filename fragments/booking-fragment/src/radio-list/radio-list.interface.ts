export interface RadioListProps {
  items: Array<string>
  selectedItem: string
  setSelectedItem: (selectedItem: string) => void
  width?: Array<string> | number
  textTransform?: 'lowercase' | 'uppercase'
}
