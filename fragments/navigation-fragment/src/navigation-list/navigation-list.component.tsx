import React                   from 'react'
import { FC }                  from 'react'
import { useRouter }           from 'next/router'

import { Box }                 from '@ui/layout'
import { Layout }              from '@ui/layout'
import { NextNavLink }         from '@ui/link'
import { Text }                from '@ui/text'

import { NavigationListProps } from './navigation-list.interface'
import { getColor }            from '../helpers'

const NavigationList: FC<NavigationListProps> = ({ active, scrollY, navigation }) => {
  const router = useRouter()

  return (
    <Box width='100%' justifyContent='space-between' flexWrap='wrap'>
      {navigation.map(({ contentAddons: { title, content } }) => (
        <Layout key={title}>
          <NextNavLink path={content}>
            <Text color={router.route === '/' ? getColor(active, scrollY) : ''} fontWeight='medium'>
              {title}
            </Text>
          </NextNavLink>
        </Layout>
      ))}
    </Box>
  )
}

export { NavigationList }
