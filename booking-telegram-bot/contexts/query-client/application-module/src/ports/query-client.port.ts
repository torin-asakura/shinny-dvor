// TODO
// import type from adapter???
// import that types to adapter!

export abstract class QueryClientPort {
  abstract getCarBodyTitles(): Promise<Array<string>>
  abstract getRadiiTitles(): Promise<Array<string>>
  abstract getServiceTitles(): Promise<Array<string>>
  abstract getWorkTimeRawString(): Promise<string>
}
