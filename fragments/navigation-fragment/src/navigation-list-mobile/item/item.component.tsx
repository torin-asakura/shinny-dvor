import type { ItemProps } from './item.interface.js'
import type { FC }        from 'react'

import React              from 'react'

import { Row }            from '@ui/layout'
import { NextNavLink }    from '@ui/link'
import { Text }           from '@ui/text'

import { getColor }       from '../../helpers/index.js'

export const Item: FC<ItemProps> = ({ active, content, title, scrollY }) => (
  <Row>
    <NextNavLink path={content}>
      <Text color={Math.abs(scrollY!) < 100 ? getColor(active, scrollY) : ''} fontWeight='medium'>
        {title}
      </Text>
    </NextNavLink>
  </Row>
)
