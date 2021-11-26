import React   from 'react'
import { FC }  from 'react'

import { Box } from '@ui/layout'
import { Row } from '@ui/layout'

const Registration: FC = () => (
  <Box width={[335, 720, 720]} height={[646, 552, 552]} border='1px solid green'>
    <Row justifyContent='center'>Registration</Row>
  </Box>
)

export { Registration }
