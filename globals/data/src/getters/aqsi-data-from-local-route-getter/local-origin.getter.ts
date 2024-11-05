export const getLocalOrigin = (): string => {
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:3000'
  }
  return process.env.SITE_ORIGIN! || 'https://shdvor.pro'
}
