import React           from 'react'
import { FC }          from 'react'
import { useState }    from 'react'

import { Column }      from '@ui/layout'
import { Layout }      from '@ui/layout'
import { NextNavLink } from '@ui/link'
import { Text }        from '@ui/text'

import { ItemProps }   from './item.interface'

const Item: FC<ItemProps> = ({ content, title }) => {
  const [activeLink, setActiveLink] = useState<boolean>(false)

  return (
    <Column>
      <Layout flexBasis={8} />
      <Layout onClick={() => setActiveLink(true)}>
        <NextNavLink path={content}>
          <Text color={activeLink ? 'darkBlue' : ''} fontWeight='medium'>
            {title}
          </Text>
        </NextNavLink>
      </Layout>
    </Column>
  )
}

export { Item }
