export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__'

const PROD_APOLLO_CLIENT_URL = 'https://wp.shdvor.pro/graphql'
const DEV_APOLLO_CLIENT_URL = 'https://wp.shdvor.pro/graphql'

const PROD_APOLLO_SERVER_URL = 'https://wp.shdvor.pro/graphql'
const DEV_APOLLO_SERVER_URL = 'https://wp.shdvor.pro/graphql'

export const clientUri =
  process.env.NODE_ENV === 'production' ? PROD_APOLLO_CLIENT_URL : DEV_APOLLO_CLIENT_URL

export const serverUri =
  process.env.NODE_ENV === 'production' ? PROD_APOLLO_SERVER_URL : DEV_APOLLO_SERVER_URL

export const isServerSide = typeof window === 'undefined'
