import React      from 'react'
import { FC }     from 'react'

import { Box }    from '@ui/layout'
import { Row }    from '@ui/layout'
import { Layout } from '@ui/layout'
import { Column } from '@ui/layout'
import { Text }   from '@ui/text'

import { Slider } from './slider'

const WorksExamples: FC = () => (
  <Box width='100%' height={[609, 976, 976]} backgroundColor='fillGray'>
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
        <Layout>
          <Text fontColor='darkGray' lineHeight='grown'>
            Text
          </Text>
        </Layout>
        <Layout flexBasis={[32, 40, 40]} />
        <Slider />
        <Layout flexBasis={[48, 100, 100]} />
      </Column>
      <Layout flexBasis={20} display={['flex', 'none', 'none']} />
    </Row>
  </Box>
)

export { WorksExamples }
