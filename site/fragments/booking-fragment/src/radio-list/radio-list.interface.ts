export interface RadioListProps {
  items: string[]
  id: string
  selectedItem: string
  setSelectedItem: (selectedItem: string) => void
  width?: number | string[]
}
