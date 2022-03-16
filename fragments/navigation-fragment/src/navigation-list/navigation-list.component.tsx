import React              from 'react'
import { FC }             from 'react'

import { Box }            from '@ui/layout'
import { NextNavLink }    from '@ui/link'
import { Text }           from '@ui/text'

const NavigationList: FC = () => (
  <Box width='100%' justifyContent='space-between' flexWrap='wrap'>
    <NextNavLink path='/services'>
      <Text>services</Text>
    </NextNavLink>
    <NextNavLink path='/contacts'>
      <Text>contacts</Text>
    </NextNavLink>
    <NextNavLink path='/blog'>
      <Text>blog</Text>
    </NextNavLink>
  </Box>
)

export { NavigationList }
