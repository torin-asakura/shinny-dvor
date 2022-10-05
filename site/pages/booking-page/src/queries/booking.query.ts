import { gql }       from '@apollo/client'

import { getClient } from '@globals/data'

const GET_BOOKING = gql`
  query GetBooking {
    bookingItems {
      nodes {
        contentAddons {
          title
          content
          role
          highlightedtext
        }
      }
    }
  }
`

const runBookingQuery = async () => {
  const client = getClient()

  const { data: bookingData } = await client.query({
    query: GET_BOOKING,
  })

  if (bookingData) {
    return {
      booking: bookingData.bookingItems.nodes,
    }
  }

  return { booking: [] }
}

export { runBookingQuery }
