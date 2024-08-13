import { FC }               from 'react'
import React                from 'react'

import { Button }           from '@ui/button'
import { VkIcon }           from '@ui/icons'
import { FacebookIcon }     from '@ui/icons'
import { Box }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Link }             from '@ui/link'

import { SocialLinksProps } from './social-links.interface.js'

const SocialLinksDark: FC<SocialLinksProps> = ({ linkVk, linkFb }) => (
  <Box width='100%' justifyContent='flex-end'>
    <Link href={linkVk} target='_blank'>
      <Box width={40}>
        <Button color='darkSocial' size='small'>
          <Layout>
            <VkIcon width={21} height={12} color='white' />
          </Layout>
        </Button>
      </Box>
    </Link>
    <Layout flexBasis={16} flexShrink={0} />
    <Link href={linkFb} target='_blank'>
      <Box width={40}>
        <Button color='darkSocial' size='small'>
          <Layout>
            <FacebookIcon width={10} height={20} color='white' />
          </Layout>
        </Button>
      </Box>
    </Link>
  </Box>
)

export { SocialLinksDark }
