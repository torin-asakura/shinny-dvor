import type { BookingDataType }    from '../interfaces/index.js'
import type { BookingDataKeyType } from '../interfaces/index.js'

import { ApiError }                from '../errors/index.js'

const checkBookingDataHelper = (body: Record<string, any>): BookingDataType => {
  const bodyKeys = Object.keys(body)
  for (const bodyKey of bodyKeys) {
    if (!body[bodyKey as BookingDataKeyType]) {
      throw new ApiError(`cannot access ${bodyKey}`)
    }
  }
  return body as BookingDataType
}

export { checkBookingDataHelper }
