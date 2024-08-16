import React           from 'react'
import { FC }          from 'react'

import { Column }      from '@ui/layout'
import { Layout }      from '@ui/layout'
import { NextNavLink } from '@ui/link'
import { Text }        from '@ui/text'

import { ItemProps }   from './item.interface'

const Item: FC<ItemProps> = ({ content, title }) => (
  <Column>
    <Layout flexBasis={8} />
    <Layout>
      <NextNavLink path={content}>
        <Text fontWeight='medium'>{title}</Text>
      </NextNavLink>
    </Layout>
  </Column>
)

export { Item }
