'use client'

import type { FC }              from 'react'

import type { RootLayoutProps } from './root-layout.interfaces.js'

import { IntlProvider }         from 'react-intl'
import React                    from 'react'

export const RootLayoutProviders: FC<RootLayoutProps> = ({ messages, children }) => (
  <IntlProvider messages={messages} locale='ru' defaultLocale='ru'>
    {children}
  </IntlProvider>
)
