import type { FragmentsDataType }   from '@globals/data'
import type { WorkResultsDataType } from '@globals/data'

export type SlidesType = {
  workResultParams: {
    fragmentId: string
    photos: {
      firstPhoto: {
        sourceUrl: string
      }
      secondPhoto: {
        sourceUrl: string
      }
    }
    price: string | number
    description: string
    time: string
  }
}

export interface WorksExamplesProps {
  fragmentsData: FragmentsDataType
  workResultsData: WorkResultsDataType
  isYandexTurbo?: boolean
}
