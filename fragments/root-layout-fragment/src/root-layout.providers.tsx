'use client'

import { IntlProvider } from 'react-intl'
import React            from 'react'

// @ts-expect-error any types
export const RoolLayoutProviders = ({ messages, children }) => (
  <IntlProvider messages={messages} locale='ru' defaultLocale='ru'>
    {children}
  </IntlProvider>
)
