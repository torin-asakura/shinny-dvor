import type { FC }        from 'react'

import type { ItemProps } from './item.interface.js'

import React              from 'react'

import { Row }            from '@ui/layout'
import { NextNavLink }    from '@ui/link'
import { Text }           from '@ui/text'

import { getColor }       from '../../helpers/index.js'

const Item: FC<ItemProps> = ({ active, content, title, scrollY }) => (
  <Row>
    <NextNavLink path={content}>
      <Text
        fontWeight='$medium'
        color={
          // eslint-disable-next-line react/jsx-no-leaked-render
          Math.abs(Number(scrollY)) < 100 ? `$${getColor(active, scrollY)}` : null
        }
      >
        {title}
      </Text>
    </NextNavLink>
  </Row>
)

export { Item }
