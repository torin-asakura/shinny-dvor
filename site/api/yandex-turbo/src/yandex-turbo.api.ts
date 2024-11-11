import { getBodyHtmlString }    from './getters/index.js'
import { getHeaderHtmlString }  from './getters/index.js'
import { getHeaderTitle }       from './getters/index.js'
import { getPathname }          from './getters/index.js'
import { getResponseUrl }       from './getters/index.js'
import { getXmlResponseString } from './getters/index.js'

type RequestDataType = { params: Promise<{ slug?: Array<string> }> }

export const yandexTurboApiHandle = async (
  _: Request,
  { params }: RequestDataType
): Promise<Response> => {
  const { slug } = await params
  const pathname = getPathname(slug)

  const responseUrl = getResponseUrl(pathname)

  const response = await fetch(responseUrl)
  const responseText = await response.text()

  const bodyHtmlString = getBodyHtmlString(responseText)
  const headerTitle = getHeaderTitle(pathname)
  const headerHtmlString = getHeaderHtmlString(headerTitle)

  const xmlResponseString = getXmlResponseString({
    bodyHtmlString,
    headerHtmlString,
    contentPageHref: responseUrl,
  })

  return new Response(xmlResponseString, {
    headers: {
      'Content-Type': 'text/xml',
    },
  })
}
