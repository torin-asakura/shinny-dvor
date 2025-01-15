'use client'

import type { RootLayoutProps } from './root-layout.interfaces.js'
import type { FC }              from 'react'

import React                    from 'react'
import { IntlProvider }         from 'react-intl'

export const RootLayoutProviders: FC<RootLayoutProps> = ({ messages, children }) => (
  <IntlProvider messages={messages} locale='ru' defaultLocale='ru'>
    {children}
  </IntlProvider>
)
