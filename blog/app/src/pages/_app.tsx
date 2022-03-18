import { withApollo } from '@atls/next-app-with-apollo'
import { withHelmet } from '@atls/next-app-with-helmet'

import App            from 'next/app'
import compose        from 'recompose/compose'

export const withProviders = compose(
  withApollo({
    uri: process.env.WP_ENDPOINT || '',
    onUnauthenticated: () => {},
  }),
  withHelmet()
)

export default withProviders(App)
