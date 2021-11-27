import React      from 'react'
import { FC }     from 'react'

import { Box }    from '@ui/layout'
import { Row }    from '@ui/layout'
import { Layout } from '@ui/layout'
import { Text }   from '@ui/text'
import { Column } from '@ui/layout'

const WorksExamples: FC = () => (
  <Box width='100%' height={[609, 976, 976]} border='1px solid yellow'>
    <Row justifyContent='center' alignItems='center'>
      <Layout flexBasis={20} display={['flex', 'none', 'none']} />
      <Column width='100%' alignItems='center'>
        <Layout flexBasis={[48, 100, 100]} />
        <Layout>
          <Text>Text</Text>
        </Layout>
        <Layout flexBasis={[8, 16, 16]} />
        <Layout>
          <Text>Text</Text>
        </Layout>
        <Layout flexBasis={[32, 40, 40]} />
        <Box width='100%' border='1px solid orange'>
          <Column height={[400, 640, 640]} width='100%' alignItems='center'>
            <Box
              height={[240, 540, 540]}
              width='100%'
              border='1px solid orange'
              justifyContent='center'
              alignItems='center'
            >
              Pic
            </Box>
            Slider
          </Column>
        </Box>
        <Layout flexBasis={[48, 100, 100]} />
      </Column>
      <Layout flexBasis={20} display={['flex', 'none', 'none']} />
    </Row>
  </Box>
)

export { WorksExamples }
