import type { FC }        from 'react'

import type { ItemProps } from './car-body-item.interface.js'

import React              from 'react'

import { CheckIcon }      from '@ui/icons'
import { Box }            from '@ui/layout'
import { Layout }         from '@ui/layout'
import { Text }           from '@ui/text'

const CarBodyItem: FC<ItemProps> = ({ item }) => (
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
