import type { FC }        from 'react'

import type { ItemProps } from './item.interface.js'

import React              from 'react'

import { Column }         from '@ui/layout'
import { Layout }         from '@ui/layout'
import { NextNavLink }    from '@ui/link'
import { Text }           from '@ui/text'

import { getColor }       from '../../helpers/index.js'

const Item: FC<ItemProps> = ({ active, content, title, scrollY }) => (
  <Column>
    <Layout flexBasis={8} />
    <Layout>
      <NextNavLink path={content}>
        <Text
          // @ts-expect-error undefinedundefinedundefined
          color={Math.abs(Number(scrollY)) < 100 ? `$${getColor(active, scrollY)}` : ''}
          fontWeight='$medium'
        >
          {title}
        </Text>
      </NextNavLink>
    </Layout>
  </Column>
)

export { Item }
