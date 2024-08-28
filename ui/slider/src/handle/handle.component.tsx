import type { FC }         from 'react'

import React               from 'react'

import { DoubleArrowIcon } from '@ui/icons'
import { Box }             from '@ui/layout'

const Handle: FC = () => (
  <Box
    width={[44, 44, 52]}
    height={[44, 44, 52]}
    borderRadius='normal'
    backgroundColor='white'
    justifyContent='center'
    alignItems='center'
  >
    <DoubleArrowIcon width={24} height={24} />
  </Box>
)

export { Handle }
