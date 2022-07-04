import React          from 'react'
import { forwardRef } from 'react'

import { Box }        from '@ui/layout'
import { Row }        from '@ui/layout'
import { Layout }     from '@ui/layout'
import { Column }     from '@ui/layout'
import { Slider }     from '@ui/slider'
import { Slide }      from '@ui/slider'
import { Text }       from '@ui/text'

const WorksExamples = forwardRef((props, ref: any) => (
  <Box width='100%' height={[609, 609, 976]} backgroundColor='fillGray' ref={ref}>
    <Row justifyContent='center' alignItems='center' overflow='hidden'>
      <Layout flexBasis={20} display={['flex', 'none', 'none']} />
      <Column width='100%' alignItems='center'>
        <Layout flexBasis={[20, 20, 100]} />
        <Layout>
          <Text fontWeight='small' fontSize='giant' lignHeight='grown'>
            Text
          </Text>
        </Layout>
        <Layout flexBasis={[8, 8, 16]} />
        <Layout>
          <Text fontWeight='normal' fontSize='normal' color='darkGray'>
            Text
          </Text>
        </Layout>
        <Layout flexBasis={[32, 32, 40]} />
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
        <Layout flexBasis={[80, 80, 100]} />
      </Column>
      <Layout flexBasis={20} display={['flex', 'none', 'none']} />
    </Row>
  </Box>
))

export { WorksExamples }
