import type { UseServiceProps }      from './use-service.interface.js'
import type { UseServiceReturnType } from './use-service.interface.js'

import { useState }                  from 'react'
import { useEffect }                 from 'react'

import { getAvailableRadii }         from '../getters/index.js'
import { getDefaultPrice }           from '../getters/index.js'
import { getServicePrice }           from '../getters/index.js'
import { getWorkExamplesData }       from '../getters/index.js'
import { getWorkExamplesTitle }      from '../getters/index.js'
import { getSignUpTitle }            from '../getters/index.js'
import { goBackTitle }               from '../getters/index.js'
import { getInitialCarBody }         from '../getters/index.js'
import { carBodyConverter }          from '../helpers/index.js'

export const useService = ({
  carBodies,
  price,
  workexamples,
  fragmentsData,
}: UseServiceProps): UseServiceReturnType => {
  const initialCarBody = getInitialCarBody(carBodies)
  const [onCarBody, setOnCarBody] = useState<string>(initialCarBody)

  const carBody = carBodyConverter(onCarBody)
  const availableRadii = getAvailableRadii({ price, carBody })

  const [visible, setVisible] = useState<boolean>(false)
  const [radius, setRadius] = useState<string>(availableRadii[0])
  const [isAdditionalService, setIsAdditionalService] = useState<boolean>(true)

  const goBack = goBackTitle(fragmentsData)
  const signUp = getSignUpTitle(fragmentsData)
  const workExamplesTitle = getWorkExamplesTitle(fragmentsData)

  const workExamplesData = getWorkExamplesData({ workexamples, price })

  useEffect(() => {
    if (!availableRadii.includes(radius)) setRadius(availableRadii[0])
  }, [onCarBody])

  const defaultPrice = getDefaultPrice(price)
  const servicePrice = getServicePrice(price as object, radius, carBody)

  return {
    visible,
    setVisible,
    onCarBody,
    setOnCarBody,
    radius,
    setRadius,
    availableRadii,
    servicePrice,
    defaultPrice,
    workExamplesTitle,
    workExamplesData,
    isAdditionalService,
    setIsAdditionalService,
    signUp,
    goBack,
  }
}
