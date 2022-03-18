import React            from 'react'
import { FC }           from 'react'

import { Button }       from '@ui/button'
import { VkIcon }       from '@ui/icons'
import { FacebookIcon } from '@ui/icons'
import { Box }          from '@ui/layout'
import { Layout }       from '@ui/layout'

const SocialLinksDark: FC = () => (
  <Box width='100%' justifyContent='flex-end'>
    <Box width={48} height={48}>
      <Button color='darkSocial'>
        <Layout>
          <VkIcon width={28} height={28} color='white' />
        </Layout>
      </Button>
    </Box>
    <Layout flexBasis={16} flexShrink={0} />
    <Box width={48} height={48}>
      <Button color='darkSocial'>
        <Layout>
          <FacebookIcon width={28} height={28} color='white' />
        </Layout>
      </Button>
    </Box>
  </Box>
)

export { SocialLinksDark }
