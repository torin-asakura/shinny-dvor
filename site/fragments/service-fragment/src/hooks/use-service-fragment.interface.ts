import type { ServiceDataType } from '@globals/data'
import type React               from 'react'

import type { CarBodies }       from '../service.interface.js'

export type UseServiceFragmentHookType = ({
  price,
  carBody,
  setCarBodyRadii,
  setSelectedRadii,
  onCarBody,
}: {
  price?: NonNullable<ServiceDataType['servicesParams']['price']> | null
  carBody: '' | `${CarBodies}`
  setCarBodyRadii: React.Dispatch<React.SetStateAction<Array<string>>>
  setSelectedRadii: React.Dispatch<React.SetStateAction<string>>
  onCarBody: string
}) => void
