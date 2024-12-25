import type { CarBodiesType } from '../hooks/index.js'

export const getInitialCarBody = (carBodies: CarBodiesType): string => {
  if (carBodies && carBodies[0]) {
    return carBodies[0]
  }
  return ''
}
