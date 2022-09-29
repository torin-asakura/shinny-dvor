import { gql }       from '@apollo/client'

import { getClient } from '@globals/data'

const GET_HERO = gql`
  query GetHero {
    heroItems {
      nodes {
        contentAddons {
          title
          role
          highlightedtext
          content
          image {
            altText
            sourceUrl
          }
        }
      }
    }
  }
`

const runHeroQuery = async () => {
  const client = getClient()

  const { data: heroData } = await client.query({
    query: GET_HERO,
  })

  if (heroData) {
    return {
      hero: heroData.heroItems.nodes,
    }
  }

  return { hero: [] }
}

export { runHeroQuery }
