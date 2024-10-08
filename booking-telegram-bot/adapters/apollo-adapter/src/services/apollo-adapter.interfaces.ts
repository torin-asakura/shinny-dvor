import type { gql } from '@apollo/client'

type GetTitlesFunctionType = () => Promise<Array<string>>

interface ApolloAdapterInt {
  getCarBodyTitles: GetTitlesFunctionType
  getRadiiTitles: GetTitlesFunctionType
  getServiceTitles: GetTitlesFunctionType
  getWorkTimeRawString: () => Promise<string>
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
