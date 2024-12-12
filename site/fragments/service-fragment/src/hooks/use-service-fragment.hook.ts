import type { UseServiceFragmentHookType } from './use-service-fragment.interface.js'

import { useEffect }                       from 'react'

export const useServiceFragmentHook: UseServiceFragmentHookType = ({
  price,
  carBody,
  setCarBodyRadii,
  setSelectedRadii,
  onCarBody,
}) => {
  const updateFormDataHook = (): void => {
    if (price) {
      const availableCarBodyRadii = Object.entries(price)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .filter(([_, carBodiesData]: [any, any]) => carBodiesData[carBody])
        .map(([radii]) => radii)

      setCarBodyRadii(availableCarBodyRadii)
      setSelectedRadii(availableCarBodyRadii[0])
    }
  }

  useEffect(() => {
    updateFormDataHook()
  }, [onCarBody])

  useEffect(() => {
    updateFormDataHook()
  }, [])
}
