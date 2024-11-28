export abstract class FetchClientPort {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  abstract fetch(url: string): Promise<any>
}
