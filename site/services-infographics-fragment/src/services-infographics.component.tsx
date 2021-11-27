import React      from 'react'
import { FC }     from 'react'

import { Box }    from '@ui/layout'
import { Row }    from '@ui/layout'
import { Column } from '@ui/layout'
import { Layout } from '@ui/layout'

const ServicesInfographics: FC = () => (
  <Box width='100%' height={[609, 976, 976]} border='1px solid yellow'>
    <Column width='100%'>
      <Layout flexBasis={[50, 100, 100]} />
      <Row justifyContent='center' alignItems='center'>
        <Layout flexBasis={[20, 80, 80]} />
        Services infographics
        <Layout flexBasis={[20, 80, 80]} />
      </Row>
      <Layout flexBasis={[50, 100, 100]} />
    </Column>
  </Box>
)

export { ServicesInfographics }
