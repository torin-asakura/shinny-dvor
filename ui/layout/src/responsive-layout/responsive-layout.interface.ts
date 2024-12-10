import { Layout }    from '@atls-ui-parts/layout'

import { Sprinkles } from './responsive-layout.css.js'

interface ResponsiveBoxBaseProps extends Sprinkles {}
export type ResponsiveBoxProps = ResponsiveBoxBaseProps & typeof Layout
