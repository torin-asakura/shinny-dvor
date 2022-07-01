export interface MenuItemProps {
  children: string
  selectedItems: any
  addSelectedItem: (item: string) => void
  removeSelectedItem: (item: string) => void
}
