'use client'

import { useSuspenseQuery }        from '@apollo/client'

import { GET_SITE_INDEX_PAGE_SEO } from '@globals/data'

export const clientHook = () => {
  console.log('console on client')
  const { data } = useSuspenseQuery(GET_SITE_INDEX_PAGE_SEO)
  console.log('DATA ON CLIENT:')
  console.log(data)

  return
}
