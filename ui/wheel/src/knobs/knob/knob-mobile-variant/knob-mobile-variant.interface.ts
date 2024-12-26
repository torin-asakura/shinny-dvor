export interface KnobMobileVariantProps {
  card: boolean
  setCard: React.Dispatch<React.SetStateAction<boolean>>
  active: boolean
  setActive: React.Dispatch<React.SetStateAction<boolean>>
  text?: string
}
