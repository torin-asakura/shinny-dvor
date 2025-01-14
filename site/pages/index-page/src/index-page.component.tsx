import type { FC }                   from 'react'

import type { IndexPageProps }       from './index-page.interfaces.js'

import { memo }                      from 'react'
import React                         from 'react'

import { IndexPageClient }           from './index-page.client.js'
import { runIndexPageServerQueries } from './hooks/run-index-page-server-queries.hook.js'

const IndexPage: FC<IndexPageProps> = async ({ searchParams }) => {
  const isYandexTurbo = Boolean(searchParams['yandex-turbo'])
  const { servicesDataToReplace } = await runIndexPageServerQueries()
  return (
    // @ts-expect-error not assignable
    <IndexPageClient servicesDataToReplace={servicesDataToReplace} isYandexTurbo={isYandexTurbo} />
  )
}

export default memo(IndexPage)
