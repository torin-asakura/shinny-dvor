export interface MenuItemProps {
  children: string
  selectedItems: Array<string>
  addSelectedItem: (item: string) => void
  removeSelectedItem: (item: string) => void
}
