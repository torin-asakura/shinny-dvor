import type { FragmentsDataType } from '@globals/data'

import { WorkExamplesDataType }   from '../service.interface.js'
import { CarBodiesType }          from '../service.interface.js'
import { PriceType }              from '../service.interface.js'
import { WorkExamplesType }       from '../service.interface.js'

export interface UseServiceProps {
  carBodies: CarBodiesType
  price: PriceType
  workexamples: WorkExamplesType
  fragmentsData: FragmentsDataType
}

export interface UseServiceReturnType {
  visible: boolean
  setVisible: globals.SetState<boolean>
  onCarBody: string
  setOnCarBody: globals.SetState<string>
  radius: string
  setRadius: globals.SetState<string>
  availableRadii: Array<string>
  servicePrice: string
  defaultPrice: number
  workExamplesTitle: string
  workExamplesData: WorkExamplesDataType
  isAdditionalService: boolean
  setIsAdditionalService: globals.SetState<boolean>
  signUp: string
  goBack: string
}
