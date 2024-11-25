import { js2xml } from 'xml-js'

export const convertYmlDataToXml = (ymlData) => {
  const xml = js2xml(ymlData, { compact: true, spaces: 2 })
  return xml
}
