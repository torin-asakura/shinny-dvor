export interface CarBodiesPartProps {
  carBodies?: Array<string | null> | null
  onCarBody: string
  setOnCarBody: React.Dispatch<React.SetStateAction<string>>
}
