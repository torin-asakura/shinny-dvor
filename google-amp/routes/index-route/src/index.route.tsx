import React                from 'react'

import { IndexPage }        from '@google-amp/index-page'
import { getGoogleAmpPage } from '@globals/data'
import { getJsxHtmlString } from '@globals/data'

export const GET = async (): Promise<Response> => {
  const bodyHtml = await getJsxHtmlString(<IndexPage />)
  const pageHtml = getGoogleAmpPage({ bodyContent: bodyHtml })
  // TODO подставить body в layout

  return new Response(pageHtml, { headers: { 'Content-Type': 'text/html' } })
}
