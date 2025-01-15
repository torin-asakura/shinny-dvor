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
    price: number | string
    description: string
    time: string
  }
}

export interface WorksExamplesProps {
  fragmentsData: FragmentsDataType
  workResultsData: WorkResultsDataType
  isYandexTurbo?: boolean
}
