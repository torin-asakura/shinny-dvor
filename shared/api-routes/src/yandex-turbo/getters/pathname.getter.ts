export const getPathname = (slug?: Array<string>): string => {
  if (slug) return slug.join('/')
  return ''
}
