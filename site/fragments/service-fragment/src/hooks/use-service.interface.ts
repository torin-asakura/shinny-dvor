import type { FragmentsDataType }    from '@globals/data'

import type { WorkExamplesDataType } from '../service.interface.js'
import type { CarBodiesType }        from '../service.interface.js'
import type { PriceType }            from '../service.interface.js'
import type { WorkExamplesType }     from '../service.interface.js'

export interface UseServiceProps {
  carBodies: CarBodiesType
  price: PriceType
  workexamples: WorkExamplesType
  fragmentsData: FragmentsDataType
}

export interface UseServiceReturnType {
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
  onCarBody: string
  setOnCarBody: React.Dispatch<React.SetStateAction<string>>
  radius: string
  setRadius: React.Dispatch<React.SetStateAction<string>>
  availableRadii: Array<string>
  servicePrice: string
  defaultPrice: number
  workExamplesTitle: string
  workExamplesData: WorkExamplesDataType
  isAdditionalService: boolean
  setIsAdditionalService: React.Dispatch<React.SetStateAction<boolean>>
  signUp: string
  goBack: string
}
