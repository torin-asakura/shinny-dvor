import type { ArrowContainerProps } from './arrow-container.interface.js'

import styled                       from '@emotion/styled'

import { Box }                      from '@ui/layout'

import { baseContainerStyles }      from './arrow-container.styles.js'

const ArrowContainer = styled(Box)<ArrowContainerProps>(baseContainerStyles)

export { ArrowContainer }
