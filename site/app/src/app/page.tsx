import { HttpLink }                from '@apollo/client'
import { ApolloClient }            from '@apollo/experimental-nextjs-app-support'
import { InMemoryCache }           from '@apollo/experimental-nextjs-app-support'
import { registerApolloClient }    from '@apollo/experimental-nextjs-app-support'

import { GET_SITE_INDEX_PAGE_SEO } from '@globals/data'

import { ClientChild }             from './child-component.js'

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      // this needs to be an absolute url, as relative urls cannot be used in SSR
      uri: 'https://wp.shdvor.pro/graphql',
      // you can disable result caching here if you want to
      // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
      // fetchOptions: { cache: "no-store" },
    }),
  })
})

const Page = async () => {
  const { data } = await getClient().query({ query: GET_SITE_INDEX_PAGE_SEO })
  console.log('server data:')
  console.log(data)

  return (
    <PreloadQuery
      query={GET_SITE_INDEX_PAGE_SEO}
      variables={{
        foo: 1,
      }}
    >
      <ClientChild />
    </PreloadQuery>
  )
}

export default Page
