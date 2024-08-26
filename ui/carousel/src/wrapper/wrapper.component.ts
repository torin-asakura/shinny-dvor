import type { WrapperProps }           from './wrapper.interface.js'

import { createWrapperBaseStyles }     from '@atls-ui-parts/carousel'
import { createWrapperPositionStyles } from '@atls-ui-parts/carousel'
import styled                          from '@emotion/styled'
import { motion }                      from 'framer-motion'

export const Wrapper = styled(motion.div)<WrapperProps>(
  createWrapperBaseStyles(),
  createWrapperPositionStyles()
)
