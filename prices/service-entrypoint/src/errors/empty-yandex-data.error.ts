export class EmptyYandexDataError extends Error {
  constructor() {
    super(`yandex data is empty`)
  }
}
