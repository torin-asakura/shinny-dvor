export abstract class FetchClientPort {
  abstract post(url: string, body: string): Promise<string>
}
