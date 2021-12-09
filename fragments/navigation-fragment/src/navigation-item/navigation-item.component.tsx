import React                   from 'react'
import { FC }                  from 'react'
import { useState }            from 'react'

import { Column }              from '@ui/layout'
import { Layout }              from '@ui/layout'
import { Divider }             from '@ui/divider'
import { Text }                from '@ui/text'

import { NavigationItemProps } from './navigation-item.interface'

const NavigationItem: FC<NavigationItemProps> = ({ name }) => {
  const [hover, setHover] = useState(false)
  const [pressed, setPressed] = useState(false)

  return (
    <Column
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => setPressed(true)}
    >
      <Layout>
        <Text color={hover ? 'blue' : 'black'}>{name}</Text>
      </Layout>
      <Layout flexBasis={8} />
      <Divider color={pressed ? 'deepBlue' : 'transparent'} />
    </Column>
  )
}

export { NavigationItem }
