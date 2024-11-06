export class UnauthorizedError extends Error {
  constructor() {
    super(`Error on globals_aqsi-data-getter, Unauthorized`)
  }
}
