import { injectGlobal } from '@emotion/css'

import { vars }         from '@ui/theme'

injectGlobal(`
.bar-of-progress {
   z-index: 9999;
   height: 6px !important;
   background-color: ${vars.colors.primaryBlue} !important;
}
`)
