type YandexOffersItem = {
  _attributes: {
    id: string
  }
  name: {
    _text: string
  }
  vendor: {
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
  picture: {
    _text: string
  }
  description: {
    _text: string
  }
}

export type YandexOffersType = Array<YandexOffersItem>
