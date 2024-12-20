import type { SocialLinksProps } from './social-links.interface.js'
import type { FC }               from 'react'

import React                     from 'react'

import { TelegramIcon }          from '@ui/icons'
import { VkIcon }                from '@ui/icons'
import { Box }                   from '@ui/layout'

import { IconPart }              from './icon-part/index.js'

export const SocialLinks: FC<SocialLinksProps> = ({ linkTelegram, linkVk, variant }) => {
  const isDark = variant === 'dark'
  return (
    <Box justifyContent='flex-end' gap='$g16'>
      <IconPart Icon={TelegramIcon} href={linkTelegram} size={36} dark={isDark} />
      <IconPart Icon={VkIcon} href={linkVk} dark={isDark} />
    </Box>
  )
}
