'use client'

import React            from 'react'
import { IntlProvider } from 'react-intl'

// @ts-expect-error any types
export const RoolLayoutProviders = ({ messages, children }) => (
  <IntlProvider messages={messages} locale='ru' defaultLocale='ru'>
    {children}
  </IntlProvider>
)
