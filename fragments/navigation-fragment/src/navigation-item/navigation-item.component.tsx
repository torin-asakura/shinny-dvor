import React                   from 'react'
import { FC }                  from 'react'
import { useState }            from 'react'

import { Button }              from '@ui/button'
import { Divider }             from '@ui/divider'
import { Column }              from '@ui/layout'
import { Layout }              from '@ui/layout'
import { Text }                from '@ui/text'

import { NavigationItemProps } from './navigation-item.interface'

const NavigationItem: FC<NavigationItemProps> = ({ name }) => {
  const [hover, setHover] = useState<boolean>(false)

  return (
    <Button
      size='ghost'
      color='transparent'
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Column>
        <Layout>
          <Text color={hover ? 'blue' : 'black'} fontWeight='medium'>
            {name}
          </Text>
        </Layout>
        <Layout flexBasis={8} />
        <Divider color='blue' weight={2} />
      </Column>
    </Button>
  )
}

export { NavigationItem }
