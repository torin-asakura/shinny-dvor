import styled                  from '@emotion/styled'

import { Box }                 from '@ui/layout'

import { ArrowContainerProps } from './arrow-container.interface.js'
import { baseContainerStyles } from './arrow-container.styles.js'

const ArrowContainer = styled(Box)<ArrowContainerProps>(baseContainerStyles)

export { ArrowContainer }
