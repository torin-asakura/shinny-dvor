import type { gql }    from '@apollo/client'

import type { client } from '../client/index.js'

export type GetTitlesFunctionType = () => Promise<Array<string>>

interface ApolloAdapterInt {
  runQuery: (query: QueryType) => Promise<ReturnType<typeof client.query<QueryType>>>
}

type QueryType = ReturnType<typeof gql>

type ReturnDataType = Promise<Array<Record<'contentAddons', Record<'title', string>>>>

type ReturnServicesDataType = Promise<Array<Record<'servicesParams', Record<'title', string>>>>

type ReturnWorkTimeDataType = Promise<
  Array<Record<'contactAddons', Record<'workinghours', string>>>
>

type ReturnTitlesType = Promise<Array<string>>

export type { ApolloAdapterInt }
export type { QueryType }
export type { ReturnDataType }
export type { ReturnTitlesType }
export type { ReturnWorkTimeDataType }
export type { ReturnServicesDataType }
