import React           from 'react'
import { FC }          from 'react'
import { useRouter }   from 'next/router'
import { useState }    from 'react'

import { Column }      from '@ui/layout'
import { Layout }      from '@ui/layout'
import { NextNavLink } from '@ui/link'
import { Text }        from '@ui/text'

import { ItemProps }   from './item.interface'
import { getColor }    from '../../helpers'

const Item: FC<ItemProps> = ({ active, content, title, scrollY }) => {
  const router = useRouter()

  const [activeLink, setActiveLink] = useState<boolean>(false)

  return (
    <Column>
      <Layout flexBasis={8} />
      <Layout onClick={() => setActiveLink(true)}>
        <NextNavLink path={content}>
          <Text
            color={router.route === '/' || activeLink ? getColor(active, scrollY, activeLink) : ''}
            fontWeight='medium'
          >
            {title}
          </Text>
        </NextNavLink>
      </Layout>
    </Column>
  )
}

export { Item }
