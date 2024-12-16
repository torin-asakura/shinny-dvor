import './global.css.js'

import { createGlobalTheme } from '@vanilla-extract/css'

import * as theme            from './theme/index.js'

export const GLOBAL_THEME_ID = 'default-theme'

export const vars = createGlobalTheme(`#${GLOBAL_THEME_ID}`, theme)
