'use client'

import * as Sentry   from '@sentry/nextjs'
import { useEffect } from 'react'
import NextError     from 'next/error'
import React         from 'react'

export default function GlobalError(contextData: any) {
  const { error }: { error: Error & { digest?: string } } = contextData

  useEffect(() => {
    Sentry.captureUnderscoreErrorException(contextData)
  }, [error])

  return (
    <html>
      <body>
        <NextError statusCode={0} />
      </body>
    </html>
  )
}
