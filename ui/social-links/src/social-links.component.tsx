import React          from 'react'
import { FC }         from 'react'

import { Box }        from '@ui/layout'
import { Layout }     from '@ui/layout'

import { SocialLink } from './social-link'

const SocialLinks: FC = () => (
  <Box width='100%' justifyContent='flex-end'>
    <SocialLink social='vk' />
    <Layout flexBasis={16} flexShrink={0} />
    <SocialLink social='facebook' />
  </Box>
)

export { SocialLinks }
