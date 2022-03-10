import React, {useEffect} from 'react'
import { FC }                  from 'react'
import { useState }            from 'react'

import { Button }              from '@ui/button'
import { Column }              from '@ui/layout'
import { Layout }              from '@ui/layout'
import { Divider }             from '@ui/divider'
import { Text }                from '@ui/text'

import { NavigationItemProps } from './navigation-item.interface'

const NavigationItem: FC<NavigationItemProps> = ({ name }) => {
  const [hover, setHover] = useState<boolean>(false)
  const [pressed, setPressed] = useState<boolean>(false)

console.log(pressed)
  return (
    <Button
      size='ghost'
      color='transparent'
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => setPressed(!pressed)}
    >
      <Column>
        <Layout>
          <Text color={hover ? 'blue' : 'black'} fontWeight='medium'>{name}</Text>
        </Layout>
        <Layout flexBasis={8} />
        <Divider color={pressed ? 'deepBlue' : 'transparent'} weight={2} />
      </Column>
    </Button>
  )
}

export { NavigationItem }
