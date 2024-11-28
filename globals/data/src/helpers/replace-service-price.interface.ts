/* eslint-disable @typescript-eslint/sort-type-constituents */

type PriceDataType = Record<string, string | null | Record<string, string | number | null>>

type RequiredReplaceServicePriceHelperType = {
  servicesParams?: { title?: string | null; price?: PriceDataType | null } | null
}

export type { RequiredReplaceServicePriceHelperType }
export type { PriceDataType }
