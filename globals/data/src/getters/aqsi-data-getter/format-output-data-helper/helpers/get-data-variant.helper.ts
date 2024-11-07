import type { GetDataVariantHelperType } from './get-data-variant.interfaces.js'

import { DataVariants }                  from './get-data-variant.constants.js'

export const getDataVariantHelper: GetDataVariantHelperType = ({ carBodyTitle, radiiTitle }) => {
  if (radiiTitle && carBodyTitle) return DataVariants.FULL
  // eslint-disable-next-line no-else-return
  else if (radiiTitle && !carBodyTitle) return DataVariants.WITHOUT_CAR_BODY
  return DataVariants.WITHOUT_RADII_CAR_BODY
}
