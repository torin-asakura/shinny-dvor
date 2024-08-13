import { ApolloClient }  from '@apollo/client'
import { InMemoryCache } from '@apollo/client'
import { gql }           from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://wp.shdvor.pro/graphql',
  cache: new InMemoryCache(),
})

export const generateMetadata = async () => {
  const faviconResponse = await client.query({
    query: gql`
      query GetFavicon {
        mediaItemBy(uri: "/favicon/") {
          sourceUrl
        }
      }
    `,
  })

  const appleTouchIconResponse = await client.query({
    query: gql`
      query GetFavicon {
        mediaItemBy(uri: "/apple_touch_icon/") {
          sourceUrl
        }
      }
    `,
  })

  const iconUrl = faviconResponse.data.mediaItemBy?.sourceUrl
  const appleIconUrl = appleTouchIconResponse.data.mediaItemBy?.sourceUrl

  return {
    icons: {
      icon: iconUrl,
      apple: appleIconUrl,
    },
  }
}
