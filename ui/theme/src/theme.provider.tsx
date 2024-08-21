import type { FC }                               from 'react'
import type { PropsWithChildren }                from 'react'

import type { ThemeProviderType }                from './theme.interfaces.js'

import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import React                                     from 'react'

import * as theme                                from './theme/index.js'
import { GlobalStyles }                          from './global.styles.js'

export const ThemeProvider: FC<PropsWithChildren<ThemeProviderType>> = ({ children }) => (
  <>
    <GlobalStyles />
    <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
  </>
)
