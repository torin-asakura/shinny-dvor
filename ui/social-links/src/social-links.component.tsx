import React                from 'react'
import { FC }               from 'react'

import { Box }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Condition }        from '@ui/condition'

import { SocialLinksProps } from './social-links.interface'
import { SocialLink }       from './social-link'

const SocialLinks: FC<SocialLinksProps> = ({ pageStyle = 'light' }) => (
  <Box width='100%' justifyContent='flex-end'>
    <Condition match={pageStyle === 'dark'}>
      <SocialLink social='fb' />
      <Layout flexBasis={16} flexShrink={0} />
      <SocialLink social='vk' />
    </Condition>
    <Condition match={pageStyle === 'light'}>
      <SocialLink social='fb' />
      <Layout flexBasis={16} flexShrink={0} />
      <SocialLink social='vk' />
    </Condition>
  </Box>
)

export { SocialLinks }
