import type { YmlDataType } from '../interfaces/index.js'

import { js2xml }           from 'xml-js'

export const formantYmlDataToXml = (ymlData: YmlDataType): string => {
  const xml = js2xml(ymlData, { compact: true, spaces: 2, ignoreDoctype: false })
  return xml
}
