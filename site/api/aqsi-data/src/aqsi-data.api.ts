import type { NextResponseType } from './aqsi-data.api.interface.js'

// @ts-expect-error:next-line
import { NextResponse }          from 'next/server'

import { getAqsiData }           from '@globals/data'

export const aqsiDataApiHandle = async (): Promise<Response> => {
  const NextResponseTyped = NextResponse as unknown as NextResponseType

  const aqsiServicesData = await getAqsiData()
  return NextResponseTyped.json(aqsiServicesData) as unknown as Response
}
