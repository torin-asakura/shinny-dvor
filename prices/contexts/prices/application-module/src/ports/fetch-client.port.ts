export abstract class FetchClientPort {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  abstract get(url: string, header: Record<string, string>): Promise<any>
}
