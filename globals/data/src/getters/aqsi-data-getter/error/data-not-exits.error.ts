export class DataNotExistError extends Error {
  constructor() {
    super(`Error on globals_aqsi-data-getter, data not exitst on page-response`)
  }
}
