import React                from 'react'
import { FC }               from 'react'

import { Button }           from '@ui/button'
import { FacebookIcon }     from '@ui/icons'
import { VkIcon }           from '@ui/icons'
import { Box }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Link }             from '@ui/link'
import { useHover }         from '@ui/utils'

import { SocialLinksProps } from './social-links.interface'

const SocialLinks: FC<SocialLinksProps> = ({ linkVk, linkFb }) => {
  const [hoverVk, hoverVkProps] = useHover()
  const [hoverFb, hoverFbProps] = useHover()

  return (
    <Box width='100%' justifyContent='flex-end'>
      <Link href={linkVk} width={48} target='_blank'>
        <Button color='radius'>
          <Layout
            alignItems='center'
            justifyContent='center'
            width={48}
            height={48}
            {...hoverVkProps}
          >
            <VkIcon width={28} height={28} color={hoverVk ? 'white' : 'black'} />
          </Layout>
        </Button>
      </Link>
      <Layout flexBasis={16} flexShrink={0} />
      <Link href={linkFb} width={48} target='_blank'>
        <Button width={48} height={48} color='radius'>
          <Layout
            alignItems='center'
            justifyContent='center'
            width={48}
            height={48}
            {...hoverFbProps}
          >
            <FacebookIcon width={28} height={28} color={hoverFb ? 'white' : 'black'} />
          </Layout>
        </Button>
      </Link>
    </Box>
  )
}

export { SocialLinks }
