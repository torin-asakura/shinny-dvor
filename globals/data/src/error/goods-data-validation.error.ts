export class GoodsDataValidationError extends Error {
  constructor(propName: string) {
    super(`Error on prices, goods-data-validator, ${propName} not exist`)
  }
}
