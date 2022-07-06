import React      from 'react'
import { FC }     from 'react'

import { Box }    from '@ui/layout'
import { Column } from '@ui/layout'

const Slider: FC = () => (
  <Column height={[400, 640, 640]} width='100%' alignItems='center'>
    <Box height={[240, 540, 540]} width='100%' justifyContent='center' alignItems='center'>
      Slider
    </Box>
  </Column>
)

export { Slider }
