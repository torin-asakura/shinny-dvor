type GetXmlResponseStringType = (props: {
  bodyHtmlString: string
  headerHtmlString: string
  contentPageHref: string
}) => string

export const getXmlResponseString: GetXmlResponseStringType = ({
  bodyHtmlString,
  headerHtmlString,
  contentPageHref,
}) => {
  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:yandex="http://news.yandex.ru"
     xmlns:media="http://search.yahoo.com/mrss/"
     xmlns:turbo="http://turbo.yandex.ru"
     version="2.0">
    <channel>
        <item turbo="true">
            <link>${contentPageHref}</link>
            <turbo:content>
                <![CDATA[
                  ${headerHtmlString}
                  ${bodyHtmlString}
                ]]>
            </turbo:content>
        </item>
    </channel>
</rss>`

  return xmlContent
}
