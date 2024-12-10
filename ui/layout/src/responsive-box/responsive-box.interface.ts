import { Box }       from '@atls-ui-parts/layout'

import { Sprinkles } from './responsive-box.css.js'

interface ResponsiveBoxBaseProps extends Sprinkles {}
export type ResponsiveBoxProps = ResponsiveBoxBaseProps & typeof Box
