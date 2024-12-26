export interface SwitchProps {
  active: string
  items?: Array<string | null> | null
  onSelect: React.Dispatch<React.SetStateAction<string>>
}
