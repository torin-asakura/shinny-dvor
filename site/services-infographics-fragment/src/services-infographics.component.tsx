import React          from 'react'
import { forwardRef } from 'react'

import { Box }        from '@ui/layout'
import { Wheel }      from '@ui/wheel'

const ServicesInfographics = forwardRef((props, ref: any) => (
  <Box width='100%' minHeight={[640, 800, 800]} justifyContent='center' alignItems='center' ref={ref}>
    <Box width={[335, 440, 440]} height={[335, 440, 440]} position='relative'>
      <Wheel />
    </Box>
  </Box>
))

export { ServicesInfographics }
