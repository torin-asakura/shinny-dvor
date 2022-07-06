import { withHelmet } from '@atls/next-document-with-helmet'
// import { withOpenGraph } from '@atls/next-document-with-opengraph'
import { withIcons }  from '@atls/next-document-with-icons'

import Document       from 'next/document'
import compose        from 'recompose/compose'

const withProviders = compose(
  // withOpenGraph({ image: '' }),
  withIcons(),
  withHelmet()
  // TODO add gtag
  // withGtag(process.env.GA_TRACKING_ID || 'GTM-TPXQGZP')
)

export default withProviders(Document)
