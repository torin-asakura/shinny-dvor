import React   from 'react'
import { FC }  from 'react'

import { Box } from '@ui/layout'
import { Row } from '@ui/layout'

const WorksExamples: FC = () => (
  <Box width='100%' height={[609, 976, 976]} border='1px solid yellow'>
    <Row justifyContent='center' alignItems='center'>
      Works examples slider
    </Row>
  </Box>
)

export { WorksExamples }
