'use client'

import React             from 'react'
import { IntlProvider }  from 'react-intl'

import { ThemeProvider } from '@ui/theme'

// TODO interfaces
const RoolLayoutProviders = ({ messages, children }) => {
  return (
    <IntlProvider messages={messages} locale='ru' defaultLocale='ru'>
      <ThemeProvider>{children}</ThemeProvider>
    </IntlProvider>
  )
}

export { RoolLayoutProviders }
