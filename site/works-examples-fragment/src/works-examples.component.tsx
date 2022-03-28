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
  <Box width='100%' height={[609, 976, 976]} backgroundColor='fillGray' ref={ref}>
    {/*<Row justifyContent='center' alignItems='center'>*/}
    {/*  <Layout flexBasis={20} display={['flex', 'none', 'none']} />*/}
    {/*  <Column width='100%' alignItems='center'>*/}
    {/*    <Layout flexBasis={[48, 100, 100]} />*/}
    {/*    <Slider>*/}
    {/*      <Slide description='test1' time={2} price={12}>*/}
    {/*        1*/}
    {/*      </Slide>*/}
    {/*      <Slide description='test2' time={2} price={12}>*/}
    {/*        2*/}
    {/*      </Slide>*/}
    {/*      <Slide description='test3' time={2} price={12}>*/}
    {/*        3*/}
    {/*      </Slide>*/}
    {/*    </Slider>*/}
    {/*    <Layout flexBasis={[48, 100, 100]} />*/}
    {/*  </Column>*/}
    {/*  <Layout flexBasis={20} display={['flex', 'none', 'none']} />*/}
    {/*</Row>*/}
    <Row justifyContent='center' alignItems='center'>
      <Layout flexBasis={20} display={['flex', 'none', 'none']} />
      <Column width='100%' alignItems='center'>
        <Layout flexBasis={[48, 100, 100]} />
        <Layout>
          <Text
            fontWeight='medium'
            fontSize={['extraLarge', 'godzilla', 'godzilla']}
            lineHeight='grown'
          >
            Text
          </Text>
        </Layout>
        <Layout flexBasis={[8, 16, 16]} />
        <Layout flexBasis={986}>
          <Text fontColor='darkGray' lineHeight='grown'>
            Text
          </Text>
        </Layout>
        <Layout flexBasis={[32, 40, 40]} />

        <Layout flexBasis={[48, 100, 100]} />
      </Column>
      <Layout flexBasis={20} display={['flex', 'none', 'none']} />
    </Row>
  </Box>
))

export { WorksExamples }
