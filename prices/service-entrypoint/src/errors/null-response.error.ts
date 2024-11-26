export class NullResponseError extends Error {
  constructor(url: string) {
    super(`Error on globals_aqsi-data-getter, response on ${url} is nullish`)
  }
}
