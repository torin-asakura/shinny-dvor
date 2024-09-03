'use client'

import { useSuspenseQuery }        from '@apollo/client'

import { GET_SITE_INDEX_PAGE_SEO } from '@globals/data'

export function ClientChild() {
  const { data } = useSuspenseQuery(GET_SITE_INDEX_PAGE_SEO, { variables: { foo: 1 } })
  console.log('client data:')
  console.log(data)
  return <div>ChildComponent</div>
}
