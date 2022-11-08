import { injectGlobal } from '@emotion/css'

import { theme }        from '@ui/theme'

injectGlobal(`
.bar-of-progress {
   z-index: 9999;
   height: 6px !important;
   background-color: ${theme.colors.primaryBlue} !important;
}
`)
