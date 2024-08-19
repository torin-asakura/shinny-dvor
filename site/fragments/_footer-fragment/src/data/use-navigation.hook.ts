import { useQuery }       from '@apollo/client'

import { GET_NAVIGATION } from './navigation.query.js'

const useNavigation = () => useQuery(GET_NAVIGATION).data?.navigationItems.nodes || []

export { useNavigation }
