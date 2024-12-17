import { createAppearanceStyles } from '@atls-ui-parts/button'

import { buttonColorsVars }       from '@ui/theme'

const common = createAppearanceStyles({
  fontColor: 'black',
  backgroundColor: 'red',
  borderColor: 'black',
})

export const appearanceVariant = {
  common,
}

export const appearanceHover = {
  commonHover: common,
}

export const appearancePressed = {
  commonPressed: common,
}

export const appearanceDisabled = {
  commonDisabled: common,
}
