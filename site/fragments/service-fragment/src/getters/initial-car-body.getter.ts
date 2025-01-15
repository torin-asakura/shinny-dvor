import type { CarBodiesType } from '../service.interface.js'

export const getInitialCarBody = (carBodies: CarBodiesType): string => {
  if (carBodies) {
    if (carBodies[0]) {
      return carBodies[0]
    }
  }
  return ''
}
