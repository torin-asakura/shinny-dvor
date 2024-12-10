import './global.css.js'

import { createGlobalTheme } from '@vanilla-extract/css'

import { borders }           from './theme/index.js'
import { colors }            from './theme/index.js'
import { fonts }             from './theme/index.js'
import { fontSizes }         from './theme/index.js'
import { fontWeights }       from './theme/index.js'
import { lineHeights }       from './theme/index.js'
import { radii }             from './theme/index.js'
import { shadows }           from './theme/index.js'

export const GLOBAL_THEME_ID = 'default-theme'

export const vars = createGlobalTheme(`#${GLOBAL_THEME_ID}`, {
  borders,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  shadows,
})
