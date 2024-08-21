'use client'

import * as Sentry   from '@sentry/nextjs'

// @ts-ignore:next-line
import NextError     from 'next/error'
import React         from 'react'
import { useEffect } from 'react'

export function GlobalError(contextData: any) {
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
