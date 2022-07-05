import { radiusVar } from '@store/chosen-radius'
import { chosenVar } from '@store/chosen-radius'

const setChosenRadius = (radius) => {
  radiusVar(radius)
  chosenVar(true)
}

export { setChosenRadius }
