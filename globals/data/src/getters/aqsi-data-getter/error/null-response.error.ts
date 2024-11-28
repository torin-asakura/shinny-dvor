export class NullResponseError extends Error {
  constructor() {
    super(`Error on globals_aqsi-data-getter, response is nullish`)
  }
}
