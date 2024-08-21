type PriceValue = {
  commercial: number | null
  jeep: number | null
  minibus: number | null
  minivan: number | null
  passenger: number | null
  __typename: 'string'
}

export type PriceType = Record<string, PriceValue>
