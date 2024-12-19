import type { SocialLinksProps } from './social-links.interface.js'
import type { FC }               from 'react'

import React                     from 'react'

import { Button }                from '@ui/button'
import { TelegramIcon }          from '@ui/icons'
import { VkIcon }                from '@ui/icons'
import { Box }                   from '@ui/layout'
import { Layout }                from '@ui/layout'
import { Link }                  from '@ui/link'
import { useHover }              from '@ui/utils'

export const SocialLinksDark: FC<SocialLinksProps> = ({ linkTelegram, linkVk }) => {
  const [hoverTelegram, hoverTelegramProps] = useHover()
  const [hoverVk, hoverVkProps] = useHover()

  return (
    <Box justifyContent='flex-end'>
      <Box
        width={48}
        height={48}
        borderRadius='$large.semiSmall'
        overflow='hidden'
        {...hoverTelegramProps}
      >
        <Link fill href={linkTelegram} target='_blank'>
          <Button size='fill' variant='tertiary'>
            <TelegramIcon width={36} height={36} color={hoverTelegram ? 'white' : 'black'} />
          </Button>
        </Link>
      </Box>
      <Layout flexBasis={16} flexShrink={0} />
      <Box
        width={48}
        height={48}
        borderRadius='$large.semiSmall'
        overflow='hidden'
        {...hoverVkProps}
      >
        <Link fill href={linkVk} target='_blank'>
          <Button size='fill' variant='tertiary'>
            <VkIcon width={28} height={28} color={hoverVk ? 'white' : 'black'} />
          </Button>
        </Link>
      </Box>
    </Box>
  )
}
