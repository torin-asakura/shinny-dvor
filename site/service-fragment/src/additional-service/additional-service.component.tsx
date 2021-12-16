import React      from 'react'
import { FC }     from 'react'

import { Box }    from '@ui/layout'
import { Column } from '@ui/layout'
import { Layout } from '@ui/layout'
import { Text }   from '@ui/text'
import { Ruble }  from '@ui/text'

const AdditionalService: FC = () => (
  <Box width='100%' height={[88, 104, 104]} backgroundColor='fillGray' borderRadius='mini'>
    <Layout flexBasis={[20, 24, 24]} />
    <Column justifyContent='center' alignItems='center'>
      <Box width={20} height={20} border='1px solid blue' />
    </Column>
    <Layout flexBasis={[20, 24, 24]} />
    <Column justifyContent='center'>
      <Layout>
        <Text fontSize={['big', 'large', 'large']} fontWeight='medium'>
          Wheel balancing
        </Text>
      </Layout>
      <Layout flexBasis={4} />
      <Layout>
        <Ruble fontSize={['big', 'large', 'large']} fontWeight='medium' />
      </Layout>
    </Column>
    <Layout flexBasis={[20, 24, 24]} />
  </Box>
)

export { AdditionalService }
