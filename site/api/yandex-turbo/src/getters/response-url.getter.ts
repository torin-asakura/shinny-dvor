const getResponseOrigin = (): string => {
  if (process.env.NODE_ENV === 'development') return 'http://localhost:3000'
  // TODO сообщить никите супер-ключ
  return process.env.SITE_ORIGIN || 'https://shdvor.pro'
}

export const getResponseUrl = (pathname: string): string => {
  const responseOrigin = getResponseOrigin()
  const responseUrl = new URL(pathname, responseOrigin)
  return responseUrl.href
}
