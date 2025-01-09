export const getBodyHtmlString = (responseText: string): string => {
  const bodyHtmlString = /<body.*?>([\s\S]*)<\/body>/.exec(responseText)?.[1] || ''
  return bodyHtmlString
}
