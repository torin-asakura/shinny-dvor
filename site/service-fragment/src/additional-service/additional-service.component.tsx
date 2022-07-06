import React        from 'react'
import { FC }       from 'react'

import { Checkbox } from '@ui/checkbox'
import { Box }      from '@ui/layout'
import { Column }   from '@ui/layout'
import { Layout }   from '@ui/layout'
import { Text }     from '@ui/text'
import { Ruble }    from '@ui/text'

const AdditionalService: FC = () => (
  <Box
    width='100%'
    height={[88, 88, 104]}
    backgroundColor='fillGray'
    borderRadius='mini'
    alignItems='center'
  >
    <Layout flexBasis={[20, 20, 24]} />
    <Checkbox>
      <Column justifyContent='center'>
        <Layout>
          <Text fontSize={['big', 'big', 'large']} fontWeight='medium'>
            Wheel balancing
          </Text>
        </Layout>
        <Layout flexBasis={4} />
        <Layout>
          <Ruble fontSize={['big', 'big', 'large']} fontWeight='medium' />
        </Layout>
      </Column>
    </Checkbox>
    <Layout flexBasis={[20, 20, 24]} />
  </Box>
)

export { AdditionalService }
