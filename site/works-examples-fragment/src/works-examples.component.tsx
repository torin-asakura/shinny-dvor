import React               from 'react'
import { FC }              from 'react'

import { Box }             from '@ui/layout'
import { Row }             from '@ui/layout'
import { Layout }          from '@ui/layout'
import { Column }          from '@ui/layout'
import { Slider }          from '@ui/slider'
import { Slide }           from '@ui/slider'
import { Arrow }           from '@ui/slider'
import { DotNav }          from '@ui/slider'
import { SlidesContainer } from '@ui/slider'
import { Text }            from '@ui/text'

const WorksExamples: FC = () => (
  <Box width='100%' height={[609, 976, 976]} backgroundColor='fillGray'>
    <Row justifyContent='center' alignItems='center'>
      <Layout flexBasis={20} display={['flex', 'none', 'none']} />
      <Column width='100%' alignItems='center'>
        <Layout flexBasis={[48, 100, 100]} />
        <Slider>
          <SlidesContainer>
            <Slide description='mfucka' time={2} price={12}>
              1
            </Slide>
            <Slide description='mfucka' time={2} price={12}>
              2
            </Slide>
            <Slide description='mfucka' time={2} price={12}>
              3
            </Slide>
          </SlidesContainer>
          <Layout flexBasis={32} />
          <Row alignItems='center'>
            <Layout flexGrow={1} />
            <Arrow direction='left' />
            <Layout flexBasis={33} flexShrink={0} />
            <DotNav />
            <Layout flexBasis={33} flexShrink={0} />
            <Arrow direction='right' />
            <Layout flexGrow={1} />
          </Row>
        </Slider>
        <Layout flexBasis={[48, 100, 100]} />
      </Column>
      <Layout flexBasis={20} display={['flex', 'none', 'none']} />
    </Row>
  </Box>
)

export { WorksExamples }
