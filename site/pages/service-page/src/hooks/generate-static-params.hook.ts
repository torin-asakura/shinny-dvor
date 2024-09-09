import { GET_SERVICES }    from '@globals/data'
import { getServerClient } from '@globals/data'

const generateStaticParams = async () => {
  const getCleanedUriString = (rawUriString: string) => {
    return rawUriString.split('/')[2]
  }

  const getServicesUris = (posts: any[]) => {
    return posts.map(({ uri }: { uri: string }) => ({
      uri: getCleanedUriString(uri),
    }))
  }

  const client = getServerClient()

  const {
    data: {
      services: { nodes: services },
    },
  } = await client.query({ query: GET_SERVICES })

  return getServicesUris(services)
}

export { generateStaticParams }
