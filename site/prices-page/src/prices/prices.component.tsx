import React               from 'react'
import { FC }              from 'react'

import { Box }             from '@ui/layout'
import { Column }          from '@ui/layout'
import { Layout }          from '@ui/layout'
import { Text }            from '@ui/text'

import { PricesAccordion } from '../prices-accordion'

const Prices: FC = () => (
  <Box width='100%' border='1px solid blue'>
    <Layout flexBasis={[20, 80, 80]} />
    <Column width='100%'>
      <Layout flexBasis={[20, 32, 32]} />
      <Layout>
        <Text>Text</Text>
      </Layout>
      <Layout flexBasis={[20, 48, 48]} />
      <Box width='100%' minHeight={378} border='1px solid blue' display={['none', 'flex', 'flex']}>
        Cervices price tabel
      </Box>
      <Layout display={['flex', 'none', 'none']}>
        <PricesAccordion />
      </Layout>
      <Layout flexBasis={[32, 64, 64]} />
      <Layout>
        <Text>Text</Text>
      </Layout>
      <Layout flexBasis={24} />
      <Box width='100%' minHeight={200} border='1px solid blue'>
        Additional services
      </Box>
      <Layout flexBasis={[64, 80, 80]} />
    </Column>
    <Layout flexBasis={[20, 80, 80]} />
  </Box>
)

export { Prices }
