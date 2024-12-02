type TwoGisOffersItem = {
  _attributes: {
    id: string
  }
  name: {
    _text: string
  }
  price: {
    _text: string
  }
  currencyId: {
    _text: string
  }
  categoryId: {
    _text: string
  }
  description: {
    _text: string
  }
}

export type TwoGisOffersType = Array<TwoGisOffersItem>
