/* eslint-disable */

import { ApolloClient }  from '@apollo/client'
import { InMemoryCache } from '@apollo/client'
import { gql }           from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://wp.shdvor.pro/graphql',
  cache: new InMemoryCache(),
})

export const generateMetadata = async () => {
  const lightFaviconResponse = await client.query({
    query: gql`
      query GetFavicon {
        mediaItemBy(uri: "/favicon-2/") {
          sourceUrl
        }
      }
    `,
  })

  const darkFaviconResponse = await client.query({
    query: gql`
      query GetFavicon {
        mediaItemBy(uri: "/favicon_light/") {
          sourceUrl
        }
      }
    `,
  })

  const appleTouchIconResponse = await client.query({
    query: gql`
      query GetFavicon {
        mediaItemBy(uri: "/apple_touch_icon-2/") {
          sourceUrl
        }
      }
    `,
  })

  const lightIconUrl = lightFaviconResponse.data.mediaItemBy?.sourceUrl
  const darkIconUrl = darkFaviconResponse.data.mediaItemBy?.sourceUrl

  const appleIconUrl = appleTouchIconResponse.data.mediaItemBy?.sourceUrl

  return {
    icons: {
      icon: [
        {
          media: '(prefers-color-scheme: light)',
          url: lightIconUrl,
          href: lightIconUrl,
        },
        {
          media: '(prefers-color-scheme: dark)',
          url: darkIconUrl,
          href: darkIconUrl,
        },
      ],
      apple: appleIconUrl,
    },
  }
}
