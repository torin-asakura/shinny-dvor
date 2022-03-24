import React      from 'react'
import { FC }     from 'react'

import { Box }    from '@ui/layout'
import { Row }    from '@ui/layout'
import { Layout } from '@ui/layout'
import { Column } from '@ui/layout'
import { Slider } from '@ui/slider'
import { Slide }  from '@ui/slider'

const WorksExamples: FC = () => (
  <Box width='100%' height={[609, 976, 976]} backgroundColor='fillGray'>
    <Row justifyContent='center' alignItems='center'>
      <Layout flexBasis={20} display={['flex', 'none', 'none']} />
      <Column width='100%' alignItems='center'>
        <Layout flexBasis={[48, 100, 100]} />
        <Slider>
          <Slide description='test1' time={2} price={12}>
            1
          </Slide>
          <Slide description='test2' time={2} price={12}>
            2
          </Slide>
          <Slide description='test3' time={2} price={12}>
            3
          </Slide>
        </Slider>
        <Layout flexBasis={[48, 100, 100]} />
      </Column>
      <Layout flexBasis={20} display={['flex', 'none', 'none']} />
    </Row>
  </Box>
)

export { WorksExamples }
