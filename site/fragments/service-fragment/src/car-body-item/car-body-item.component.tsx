import type { ItemProps } from './car-body-item.interface.js'
import type { FC }        from 'react'

import React              from 'react'

import { CheckIcon }      from '@ui/icons'
import { Box }            from '@ui/layout'
import { Layout }         from '@ui/layout'
import { Text }           from '@ui/text'

export const CarBodyItem: FC<ItemProps> = ({ item }) => (
  <Box borderRadius='$small' justifyContent='space-between' alignItems='center'>
    <Layout flexBasis='12px' />
    <CheckIcon width='24px' height='24px' />
    <Layout flexBasis='6px' />
    <Layout>
      <Text>{item}</Text>
    </Layout>
    <Layout flexBasis='12px' />
  </Box>
)
