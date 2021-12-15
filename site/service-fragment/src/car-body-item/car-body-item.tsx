import React         from 'react'
import { FC }        from 'react'

import { Box }       from '@ui/layout'
import { Layout }    from '@ui/layout'
import { CheckIcon } from '@ui/icons'
import { Text }      from '@ui/text'

const CarBodyItem: FC = ({ item }) => (
  <Box borderRadius='small' justifyContent='space-between' alignItems='center'>
    <Layout flexBasis={12} />
    <CheckIcon width={24} height={24} />
    <Layout flexBasis={6} />
    <Layout>
      <Text>{item}</Text>
    </Layout>
    <Layout flexBasis={12} />
  </Box>
)

export { CarBodyItem }
