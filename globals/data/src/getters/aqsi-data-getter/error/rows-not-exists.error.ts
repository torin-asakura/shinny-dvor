export class RowsNotExistError extends Error {
  constructor() {
    super(`Error on globals_aqsi-data-getter, rows not exitst on page-response`)
  }
}
