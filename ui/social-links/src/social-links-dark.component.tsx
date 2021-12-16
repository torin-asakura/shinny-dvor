import React            from 'react'
import { FC }           from 'react'

import { Button }       from '@ui/button'
import { Box }          from '@ui/layout'
import { Layout }       from '@ui/layout'
import { VkIcon }       from '@ui/icons'
import { FacebookIcon } from '@ui/icons'

const SocialLinksDark: FC = () => (
  <Box width='100%' justifyContent='flex-end'>
    <Box width={48} height={48}>
      <Button color='darkSocial'>
        <Layout>
          <VkIcon width={24} height={24} color='white' />
        </Layout>
      </Button>
    </Box>
    <Layout flexBasis={16} flexShrink={0} />
    <Box width={48} height={48}>
      <Button color='darkSocial'>
        <Layout>
          <FacebookIcon width={24} height={24} color='white' />
        </Layout>
      </Button>
    </Box>
  </Box>
)

export { SocialLinksDark }
