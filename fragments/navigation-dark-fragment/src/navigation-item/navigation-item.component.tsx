import React                   from 'react'
import { FC }                  from 'react'
import { useState }            from 'react'

import { Button }              from '@ui/button'
import { Column }              from '@ui/layout'
import { Layout }              from '@ui/layout'
import { Divider }             from '@ui/divider'
import { Text }                from '@ui/text'

import { NavigationItemProps } from './navigation-item.interface'

const NavigationItem: FC<NavigationItemProps> = ({ name }) => {
  const [, setHover] = useState(false)
  const [pressed, setPressed] = useState(false)

  return (
    <Button
      size='ghost'
      color='transparent'
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => setPressed(true)}
    >
      <Column>
        <Layout>
          <Text color='white' fontWeight='medium'>{name}</Text>
        </Layout>
        <Divider color={pressed ? 'white' : 'transparent'} />
      </Column>
    </Button>
  )
}

export { NavigationItem }
