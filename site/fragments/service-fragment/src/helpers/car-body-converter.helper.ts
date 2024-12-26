import { useIntl }   from 'react-intl'

import { CarBodies } from '../service.interface.js'

export const carBodyConverter = (carBody: string): '' | `${CarBodies}` => {
  // eslint-disable-next-line
  const intl = useIntl()

  if (carBody === intl.formatMessage({ id: '1', defaultMessage: 'Легковой' }))
    return CarBodies.PASSENGER
  if (carBody === intl.formatMessage({ id: '2', defaultMessage: 'Джип' })) return CarBodies.JEEP
  if (carBody === intl.formatMessage({ id: '3', defaultMessage: 'Коммерческий' }))
    return CarBodies.COMMERCIAL
  if (carBody === intl.formatMessage({ id: '4', defaultMessage: 'Минивэн' }))
    return CarBodies.MINIVAN
  if (carBody === intl.formatMessage({ id: '5', defaultMessage: 'Микроавтобус' }))
    return CarBodies.MINIBUS

  return ''
}
