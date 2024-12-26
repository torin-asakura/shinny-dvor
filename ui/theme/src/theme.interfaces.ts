import type { vars } from './theme.css.js'

export type ThemeColorType = `$${keyof typeof vars.colors}`
