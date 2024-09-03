'use client'

import type { IndexPageClientProps } from './index-page.interfaces.js'
import type { FC }                   from 'react'

import { useSuspenseQuery }          from '@apollo/client'

import React                         from 'react'

import { GET_SITE_INDEX_PAGE_SEO }   from '@globals/data'

export const IndexPageClient: FC<IndexPageClientProps> = () => {
  const { data } = useSuspenseQuery(GET_SITE_INDEX_PAGE_SEO)
  console.log('DATA ON CLIENT:')
  console.log(data)

  return <>blaaaabbb</>
}
