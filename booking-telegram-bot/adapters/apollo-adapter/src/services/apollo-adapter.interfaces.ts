import { gql } from '@apollo/client'

type GetTitlesFunctionType = () => Promise<Array<string>>

interface ApolloAdapterInt {
  getCarBodyTitles: GetTitlesFunctionType
  getRadiiTitles: GetTitlesFunctionType
  getServiceTitles: GetTitlesFunctionType
  getWorkTimeRawString: () => Promise<string>
}

type QueryType = ReturnType<typeof gql>

export type { ApolloAdapterInt }
export type { QueryType }
