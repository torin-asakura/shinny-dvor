const BASE_TITLE_TEXT = 'SHDVOR'

// TODO locales
const getAdditionalTitle = (pathname: string): string => {
  switch (pathname) {
    case 'services':
      return 'SERVICES'
    case 'contacts':
      return 'CONTACTS'
    case '':
      return 'INDEX'

    default:
      return pathname.toUpperCase()
  }
}

export const getHeaderTitle = (pathname: string): string => {
  const additionalTitle = getAdditionalTitle(pathname)
  return `${BASE_TITLE_TEXT} - ${additionalTitle}`
}
