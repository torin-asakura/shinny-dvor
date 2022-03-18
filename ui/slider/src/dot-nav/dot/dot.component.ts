import styled            from '@emotion/styled'

import { Box }           from '@ui/layout'

import { DotProps }      from './dot.interface'
import { baseDotStyles } from './dot.styles'

const Dot = styled(Box)<DotProps>(baseDotStyles)

export { Dot }
