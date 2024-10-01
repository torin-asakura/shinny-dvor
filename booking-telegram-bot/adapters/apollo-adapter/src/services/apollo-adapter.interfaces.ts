type GetTitlesFunctionType = () => Promise<Array<string>>

interface ApolloAdapterInt {
  getCarBodyTitles: GetTitlesFunctionType
  getRadiiTitles: GetTitlesFunctionType
  getServiceTitles: GetTitlesFunctionType
  getWorkTimeRawString: () => Promise<string>
}

export type { ApolloAdapterInt }
