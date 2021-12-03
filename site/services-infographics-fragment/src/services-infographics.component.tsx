import React   from 'react'
import { FC }  from 'react'

import { Box } from '@ui/layout'

const ServicesInfographics: FC = () => (
  <Box
    width='100%'
    height={[640, 800, 800]}
    justifyContent='center'
    alignItems='center'
    border='1px solid yellow'
  >
    <Box
      width={[335, 440, 440]}
      height={[335, 440, 440]}
      border='1px solid yellow'
      justifyContent='center'
      alignItems='center'
    >
      {' '}
      Services infographics
    </Box>
  </Box>
)

export { ServicesInfographics }
