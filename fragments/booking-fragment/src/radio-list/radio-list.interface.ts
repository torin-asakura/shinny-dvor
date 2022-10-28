export interface RadioListProps {
  items: string[]
  selectedItem: string
  setSelectedItem: (selectedItem: string) => void
  width?: number | string[]
  textTransform?: 'uppercase' | 'lowercase'
}
