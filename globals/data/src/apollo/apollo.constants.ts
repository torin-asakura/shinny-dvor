export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__'

const APOLLO_CLIENT_URL = 'https://wp.shdvor.pro/graphql'
const APOLLO_SERVER_URL = 'https://wp.shdvor.pro/graphql'

export const clientUri = APOLLO_CLIENT_URL
export const serverUri = APOLLO_SERVER_URL

export const isServerSide = typeof window === 'undefined'
