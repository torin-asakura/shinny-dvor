import React            from 'react'
import { FC }           from 'react'

import { Button }       from '@ui/button'
import { VkIcon }       from '@ui/icons'
import { FacebookIcon } from '@ui/icons'
import { Box }          from '@ui/layout'
import { Layout }       from '@ui/layout'

const SocialLinksDark: FC = () => (
  <Box width='100%' justifyContent='flex-end'>
    <Box width={40}>
      <Button color='darkSocial' size='small'>
        <Layout>
          <VkIcon width={21} height={12} color='white' />
        </Layout>
      </Button>
    </Box>
    <Layout flexBasis={16} flexShrink={0} />
    <Box width={40}>
      <Button color='darkSocial' size='small'>
        <Layout>
          <FacebookIcon width={10} height={20} color='white' />
        </Layout>
      </Button>
    </Box>
  </Box>
)

export { SocialLinksDark }
