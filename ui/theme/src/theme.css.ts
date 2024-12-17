import './global.css.js'
import * as theme            from './theme/index.js'

import { createGlobalTheme } from '@vanilla-extract/css'

export const GLOBAL_THEME_ID = '#default-theme'

export const vars = createGlobalTheme(':root', theme)
// export const vars = createGlobalTheme(GLOBAL_THEME_ID, theme)
// export const buttonColorsVars = createGlobalTheme(BUTTON_COLORS_THEME_ID, buttonColorsTheme)
