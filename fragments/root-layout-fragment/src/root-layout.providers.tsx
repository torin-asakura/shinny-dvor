'use client'

import { IntlProvider }  from 'react-intl'
import React             from 'react'

import { ThemeProvider } from '@ui/theme'

// @ts-expect-error any types
const RoolLayoutProviders = ({ messages, children }) => {
  return (
    <IntlProvider messages={messages} locale='ru' defaultLocale='ru'>
      <ThemeProvider>{children}</ThemeProvider>
    </IntlProvider>
  )
}

export { RoolLayoutProviders }
