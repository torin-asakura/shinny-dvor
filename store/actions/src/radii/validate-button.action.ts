import { activeRadiusVar }  from '@store/booking'
import { activeCarBodyVar } from '@store/booking'

const validateButton = (id: string, checked: boolean) => {
  if (id === 'radius') {
    activeRadiusVar(!checked)
  } else if (id === 'carBody') {
    activeCarBodyVar(!checked)
  }
}

export { validateButton }
