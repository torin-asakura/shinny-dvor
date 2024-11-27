import * as Sentry       from '@sentry/node'

import { Logger }        from '@atls/logger'

import { getS3Client }   from '../getters/index.js'
import { putObjectToS3 } from '../helpers/index.js'

const sentryDsn =
  process.env.SENTRY_DSN ?? 'https://aeae54efe3df4eac9f5ccebb4aa67476@logger.atls.tech/4'

if (process.env.NODE_ENV === 'production') Sentry.init({ dsn: sentryDsn })

export const getBootstrap = (logger: Logger) => {
  try {
    const bootstrap = async (): Promise<void> => {
      // TODO uncomment
      // const s3Client = getS3Client()
      //
      // const dateString = new Date().toISOString()
      //
      // await putObjectToS3({
      //   s3Client,
      //   xml: yandexXml,
      //   key: `prices-${dateString}.xml`,
      //   logger,
      // })
      //
      // await putObjectToS3({
      //   s3Client,
      //   xml: yandexXml,
      //   key: `prices-latest.xml`,
      //   logger,
      // })
      // TODO uncomment
      // await putObjectToS3({
      //   s3Client,
      //   xml: twoGisXml,
      //   key: `two-gis-prices-${dateString}.xml`,
      //   logger,
      // })
      //
      // await putObjectToS3({
      //   s3Client,
      //   xml: twoGisXml,
      //   key: `two-gis-prices-latest.xml`,
      //   logger,
      // })
    }

    return bootstrap
  } catch (error) {
    logger.error(error)
    return
  }
}
