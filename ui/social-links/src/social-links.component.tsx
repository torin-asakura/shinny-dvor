import React                from 'react'
import { FC }               from 'react'

import { Button }           from '@ui/button'
import { FacebookIcon }     from '@ui/icons'
import { VkIcon }           from '@ui/icons'
import { Box }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Link }             from '@ui/link'
import { useHover }         from '@ui/utils'

import { SocialLinksProps } from './social-links.interface.js'

const SocialLinks: FC<SocialLinksProps> = ({ linkVk, linkFb }) => {
  const [hoverVk, hoverVkProps] = useHover()
  const [hoverFb, hoverFbProps] = useHover()

  return (
    <Box width='100%' justifyContent='flex-end'>
      <Link href={linkVk} target='_blank'>
        <Box width={48} height={48} {...hoverVkProps}>
          <Button color='radius'>
            <Layout>
              <VkIcon width={28} height={28} color={hoverVk ? 'white' : 'black'} />
            </Layout>
          </Button>
        </Box>
      </Link>
      <Layout flexBasis={16} flexShrink={0} />
      <Link href={linkFb} target='_blank'>
        <Box width={48} height={48} {...hoverFbProps}>
          <Button color='radius'>
            <Layout>
              <FacebookIcon width={28} height={28} color={hoverFb ? 'white' : 'black'} />
            </Layout>
          </Button>
        </Box>
      </Link>
    </Box>
  )
}

export { SocialLinks }
