export interface CarBodiesCarouselMobileVariantProps {
  carBodies?: Array<string | null> | null
  onCarBody: string
  setOnCarBody: React.Dispatch<React.SetStateAction<string>>
}
