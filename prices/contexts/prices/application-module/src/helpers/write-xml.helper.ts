import type { Logger } from '@atls/logger'

import * as fs         from 'fs/promises'

type WriteXmlHelperProps = {
  path: string
  xml: string
  logger: Logger
}

export const writeXmlHelper = async ({ path, xml, logger }: WriteXmlHelperProps): Promise<void> => {
  if (process.env.NODE_ENV === 'development') {
    await fs.writeFile(path, xml)
    logger.info(`write xml to ${path}`)
  }
}
