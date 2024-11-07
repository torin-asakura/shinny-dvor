import type { DataVariants } from './get-data-variant.constants.js'

type Props = { carBodyTitle?: object; radiiTitle?: object }

type GetDataVariantHelperType = (props: Props) => DataVariants

export type { GetDataVariantHelperType }
