import React               from 'react'

import { memo }      from 'react'

import { DoubleArrowIcon } from '@ui/icons'
import { Box }             from '@ui/layout'

const Handle: React.FC = memo(() => (
  <Box
    width={[44, 44, 52]}
    height={[44, 44, 52]}
    borderRadius='$normal'
    backgroundColor='$white'
    justifyContent='center'
    alignItems='center'
  >
    <DoubleArrowIcon width={24} height={24} />
  </Box>
))

export { Handle }
