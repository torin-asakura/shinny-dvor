export interface AdditionalServiceProps {
  isAdditionalService: boolean
  setIsAdditionalService: (isAdditionalService: boolean) => void
  additionalservice: {
    title: string
    price: number
  }
}
