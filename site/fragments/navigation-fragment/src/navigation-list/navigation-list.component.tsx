import React               from 'react'
import { FC }              from 'react'

import { Box }             from '@ui/layout'
import { Layout }          from '@ui/layout'
import { NextNavLink }     from '@ui/link'
import { Text }            from '@ui/text'

import { NavigationProps } from '../navigation.interface'

const NavigationList: FC<NavigationProps> = ({ navigation }) => (
  <Box width='100%' justifyContent='space-between' flexWrap='wrap'>
    {navigation.map(({ contentAddons: { title, content } }) => (
      <Layout key={title}>
        <NextNavLink path={content}>
          <Text fontWeight='medium'>{title}</Text>
        </NextNavLink>
      </Layout>
    ))}
  </Box>
)

export { NavigationList }
