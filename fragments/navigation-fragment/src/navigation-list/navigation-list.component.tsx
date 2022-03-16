import React              from 'react'
import { FC }             from 'react'

import { Box }            from '@ui/layout'
import { NextNavLink }    from '@ui/link'
import { Text }           from '@ui/text'

const NavigationList: FC = () => (
  <Box width='100%' justifyContent='space-between' flexWrap='wrap'>
    <NextNavLink path='/services'>
      <Text fontWeight='medium'>services</Text>
    </NextNavLink>
    <NextNavLink path='/contacts'>
      <Text fontWeight='medium'>contacts</Text>
    </NextNavLink>
    <NextNavLink path='/blog'>
      <Text fontWeight='medium'>blog</Text>
    </NextNavLink>
  </Box>
)

export { NavigationList }
